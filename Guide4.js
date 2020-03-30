import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const items = [
  {
    id: '1',
    name: 'acceptance',
  },
  {
    id: '2',
    name: 'admiration',
  },
  {
    id: '3',
    name: 'aggressiveness',
  },
  {
    id: '4',
    name: 'amazement',
  },
  {
    id: '5',
    name: 'anger',
  },
  {
    id: '6',
    name: 'annoyance',
  },
  {
    id: '7',
    name: 'anticipation',
  },
  {
    id: '8',
    name: 'apprehension',
  },
  {
    id: '9',
    name: 'awe',
  },
  {
    id: '10',
    name: 'boredom',
  },
  {
    id: '11',
    name: 'contempt',
  },
  {
    id: '12',
    name: 'disapproval',
  },
  {
    id: '13',
    name: 'disgust',
  },
  {
    id: '14',
    name: 'distraction',
  },
  {
    id: '15',
    name: 'ecstasy',
  },
  {
    id: '16',
    name: 'fear',
  },
  {
    id: '17',
    name: 'grief',
  },
  {
    id: '18',
    name: 'interest',
  },
  {
    id: '19',
    name: 'joy',
  },
  {
    id: '20',
    name: 'loathing',
  },
  {
    id: '21',
    name: 'love',
  },
  {
    id: '22',
    name: 'optimism',
  },
  {
    id: '23',
    name: 'pensiveness',
  },
  {
    id: '24',
    name: 'rage',
  },
  {
    id: '25',
    name: 'remorse',
  },
  {
    id: '26',
    name: 'sadness',
  },
  {
    id: '27',
    name: 'serenity',
  },
  {
    id: '28',
    name: 'submission',
  },
  {
    id: '29',
    name: 'surprise',
  },
  {
    id: '30',
    name: 'terror',
  },
  {
    id: '31',
    name: 'trust',
  },
  {
    id: '32',
    name: 'vigilance',
  },
];

function Item({id, title, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        {backgroundColor: selected ? '#6e3b6e' : '#f9c2ff'},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function Guide4() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.loginText}>
          Each day you can input how you're feeling! Use the diagram to narrow
          down how you're feeling and select the corresponding emotion(s) from
          the dropdown like the one below!
        </Text>
        <Image
          style={styles.smol}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plutchik-wheel.svg/1200px-Plutchik-wheel.svg.png',
          }}
        />
        <View style={styles.rowContainer}>
          <View style={styles.leftView}>
            <TouchableOpacity
              style={styles.leftBtn}
              onPress={() => this.props.navigation.navigate('Guide3Screen')}>
              <Text style={styles.loginText}>Back!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightView}>
            <TouchableOpacity
              style={styles.rightBtn}
              onPress={() => this.props.navigation.navigate('Guide5Screen')}>
              <Text style={styles.loginText}>Next!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Item
            id={item.id}
            title={item.name}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 16,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000000',
  },
  forgot: {
    color: 'black',
    fontSize: 14,
  },
  loginText: {
    color: 'black',
    fontSize: 18,
    marginRight: 10,
    marginLeft: 10,
  },
  rightBtn: {
    width: '45%',
    backgroundColor: '#ff666b',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    flex: 1,
    marginTop: 25,
  },
  leftView: {
    flex: 1,
    marginLeft: 90,
    marginTop: 25,
  },
  leftBtn: {
    width: '45%',
    backgroundColor: '#ff666b',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smol: {
    width: 400,
    height: 400,
  },
});
