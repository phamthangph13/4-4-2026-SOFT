import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import EventCard from '../components/EventCard';
import InfoCard from '../components/infoCard';
import Task2 from '../components/task2';
import Task3 from '../components/task3';
import SongCard from '../components/task4';
import TestCpn from '../components/test';
const username = "PHAM THANG"
const valuetest = 10;
const testobj = { name: "phamthang", age: 20 }
function testvaluereturnf() {
  return (2)
}

const styles = StyleSheet.create({

})
export default function Index() {
  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 20, color: "red", backgroundColor: "yellow" }}>Hello {username}!</Text>
        <Button color="blue" title="Click me" onPress={() => alert("hello")} />
        <TestCpn />
        <Task2 />
        <Text>{valuetest}</Text>
        <Text>{valuetest * 2}</Text>
        <Text>{testobj.name}</Text>
        <Task3 />

        <InfoCard name="Pham Nhu Thang" city="Hanoi" />
        {listSong.map((item, index) => (
          <SongCard key={index} title={item.title} artist={item.artist} />
        ))}
        {eventlist.map((item, index) => (
          <EventCard key={index} name={item.name} isActive={item.isActive} />
        ))}
      </View>
    </ScrollView >
  )
}

const eventlist = [{
  name: "Sự kiện Phúc Xem thread đang diễn ra",
  isActive: true,
}, {
  name: "Sự kiện Phúc đang xem thread city đã kết thúc",
  isActive: false,
}
  , {
  name: "Sự kiện Phúc đang xem thread city đã kết thúc",
  isActive: false,
}
]

const listSong = [{
  title: "Song 1",
  artist: "Artist 1",

}, {
  title: "Song 2",
  artist: "Artist 2",

}, {
  title: "Song 3",
  artist: "Artist 3",

}, {
  title: "Song 4",
  artist: "Artist 4",

}, {
  title: "Song 5",
  artist: "Artist 5",

}, {
  title: "Song 6",
  artist: "Artist 6",

}, {
  title: "Song 7",
  artist: "Artist 7",

}, {
  title: "Song 8",
  artist: "Artist 8",

}, {
  title: "Song 9",
  artist: "Artist 9",

}, {
  title: "Song 10",
  artist: "Artist 10",

}]