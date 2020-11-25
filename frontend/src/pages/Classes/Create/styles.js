import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D7AFD',
  },
  form: {
    marginTop: 12,
  },
  chooseDisciplinesText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  classWrapper: {
    backgroundColor: '#6495FF',
    paddingVertical: 10,
    // height: 155,
    borderRadius: 4,
    marginTop: 18,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  discipline: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: WIDTH - 70,
    borderRadius: 4,
    marginBottom: 8,
    paddingVertical: 14,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    elevation: 8,
  },
  classHourPriceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  classHourPrice: {
    width: WIDTH / 2 - 14,
    marginHorizontal: 4,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  disciplineWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  closeIcon: {},
  closeIconWrapper: {
    height: 55,
    marginLeft: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  registerClassWrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    elevation: 10,
  },
  registerClass: {
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    color: '#0051FF',
  },
  createdAt: {
    color: 'white',
  },
  savedClassesInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  classActive: {
    color: 'blue',
    fontSize: 16,
  },
});

export default styles;
