import api from "./api";

export function store(latitude, longitude, userId) {
  api.put(`/update/location/${userId}`, {
    coordinates: [latitude, longitude]
  }).then(function (response) {
    return true
  }).catch(function (error) {
    return false
  })
}
