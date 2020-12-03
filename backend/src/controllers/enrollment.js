const { errorHandler } = require("../helpers/dbErrorHandler");
const enrollment = require("../models/enrollment");

const Enrollment = require("../models/enrollment");

exports.create = async (req, res) => {
  const { goals, hour } = req.body;
  // if (!(req.body.days)) {
  //     return res.status(400).json({ err: 'Days are required' })
  // }
  // const days = await req.body.days.map(day => day.charAt(0).toUpperCase() + day.slice(1))

  const enrollment = new Enrollment({
    class: req.class._id,
    user: req.profile._id,
    goals,
    // days,
    // hour,
    hourClassPrice: req.class.hourClassPrice,
  });

  await Enrollment.find({ class: req.class._id, user: req.profile._id }).exec(
    async (err, result) => {
      if (err) {
        return res.status(400).json({ err: errorHandler(err) });
      }
      if (result != "") {
        console.log(result);
        return res
          .status(304)
          .json({ err: "User is already enrolled in this class" });
      }

      await enrollment.save((err, enroll) => {
        if (err || !enroll) {
          return res.status(400).json({ err: errorHandler(err) });
        }
        console.log("Exec here");
        return res.status(200).json(enroll);
      });
    }
  );
};

exports.remove = async (req, res) => {
  await Enrollment.deleteOne({
    class: req.class._id,
    user: req.profile._id,
  }).exec((err, result) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
    } else if (!result) {
      return res.status(404).json({ err: "Enrollment not found" });
    }
    return res.status(200).json({ message: "Registration has been removed" });
  });
};

exports.enrollById = async (req, res, next, id) => {
  await Enrollment.findById(id).exec((err, result) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
    } else if (!result) {
      console.log("entrou aqui");
      return res.status(404).json({ err: "Enrollment not found" });
    } else {
      console.log(result);
      req.enrollment = result;
      next();
    }
  });
};

exports.enrollsByClass = async (req, res) => {};

exports.enrollsQuantityByClass = async (req, res) => {};

exports.approveEnrollment = async (req, res) => {
  Enrollment.findById(req.enrollment._id).exec((err, enroll) => {
    if (err) {
      return res.status(400).json(err);
    } else if (!enroll) {
      return res.status(404).json({ error: "Not found" });
    } else {
      enroll.approved = true;
      enroll.save((err, result) => {
        if (err) {
          return res.status(400).json({ message: "error on save enrollment" });
        } else {
          return res.status(200).json({ message: "enrollment approved" });
        }
      });
    }
  });
};
exports.disapproveEnrollment = async (req, res) => {
  Enrollment.findByIdAndRemove(req.enrollment._id).exec((err, result) => {
    if (err) {
      return res.status(400).json(err);
    } else {
      return res
        .status(200)
        .json({ message: "enrollment disapproved successfully." });
    }
  });
};
exports.enrollmentActiveByTeacher = async (req, res) => {
  Enrollment.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $lookup: {
        from: "classes",
        localField: "class",
        foreignField: "_id",
        as: "Class",
      },
    },
    { $unwind: "$Class" },
    {
      $lookup: {
        from: "disciplines",
        localField: "Class.discipline",
        foreignField: "_id",
        as: "discipline",
      },
    },
    { $unwind: "$discipline" },
    {
      $lookup: {
        from: "teachers",
        localField: "Class.teacher",
        foreignField: "_id",
        as: "Teacher",
      },
    },
    { $unwind: "$Teacher" },
    {
      $match: {
        "Teacher._id": {
          $eq: req.teacher._id,
        },
        approved: {
          $eq: true,
        },
      },
    },
    {
      $project: {
        Teacher: 0,
        "User.hashed_password": 0,
        "User.salt": 0,
        "User.email": 0,
      },
    },
  ]).exec((err,result) => {
    if(err){
      return res.status(400).json(err)
    }else{
      return res.status(200).json(result)
    }
  })

};

exports.enrollsByTeacher = async (req, res) => {
  console.log(req.teacher._id);
  await Enrollment.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $lookup: {
        from: "classes",
        localField: "class",
        foreignField: "_id",
        as: "Class",
      },
    },
    { $unwind: "$Class" },
    {
      $lookup: {
        from: "disciplines",
        localField: "Class.discipline",
        foreignField: "_id",
        as: "discipline",
      },
    },
    { $unwind: "$discipline" },
    {
      $lookup: {
        from: "teachers",
        localField: "Class.teacher",
        foreignField: "_id",
        as: "Teacher",
      },
    },
    { $unwind: "$Teacher" },
    {
      $match: {
        "Teacher._id": {
          $eq: req.teacher._id,
        },
        approved: {
          $eq: false,
        },
      },
    },
    {
      $project: {
        Teacher: 0,
        "User.hashed_password": 0,
        "User.salt": 0,
        "User.email": 0,
      },
    },
  ]).exec((err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ err: errorHandler(err) });
    }
    console.log(result);
    return res.status(200).json(result);
  });
};
