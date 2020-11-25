import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D7AFD',
  },
  title: {
    fontSize: 17,
    color: 'white',
    alignSelf: 'flex-end',
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  titleWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginHorizontal: 8,
    backgroundColor: 'white',
    marginTop: 8,
    borderRadius: 6,
  },
  textarea: {
    padding: 10,
    fontSize: 16,
  },
  textareaContainer: {
    height: 130,
    marginTop: 8,
    width: WIDTH - 16,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
  },
  cepSearchWrapper: {
    flexDirection: 'row',
    height: 75,
  },
  searchButton: {
    marginTop: 7,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 6,
    height: 67,
    width: 55,
    backgroundColor: 'white',
    zIndex: 0,
  },
  inputSearchCep: {
    width: WIDTH - 80,
  },
  iconSearch: {
    alignSelf: 'center',
    color: '#3D7AFD',
  },
  submitButton: {
    alignSelf: 'center',
    marginTop: 30,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 5,
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#103C98',
  },
});

export default styles;
