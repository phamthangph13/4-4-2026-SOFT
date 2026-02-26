import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import EventCard from '../components/EventCard';
import InfoCard from '../components/infoCard';
import Task2 from '../components/task2';
import Task3 from '../components/task3';
import SongCard from '../components/task4';
import TestCpn from '../components/test';
import ObjectPropDemo from '../components/objectpropdemo';
import Testfunctionprop from '../components/functionprop';
import NutNhan from '../components/testcomponentsbutton';
import Task5 from '../components/task5';
import ClockTask from '../components/clockTask';
import ApiCall from '../components/APICALL'
import BaiTap1 from '../components/BaiTap1'
import BaiTap2 from '../components/BaiTap2'
import BaiTap3 from '../components/BaiTap3'
import BaiTap5 from '../components/BaiTap5'
const username = "PHAM THANG"
const valuetest = 10;

const testobj = { name: "phamthang", age: 20 }



function testvaluereturnf() {
  return (2)
}
function testlog() {
  console.log("HELLO WORLD!")
}
const styles = StyleSheet.create({

})








export default function Index() {
  return (
    <ScrollView>
      <View>

        {/* <Text style={{ fontSize: 20, color: "red", backgroundColor: "yellow" }}>Hello {username}!</Text>
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
        ))} */}
        {/* <ObjectPropDemo myobj={testobj} />
        <Testfunctionprop testStr="TEST TESTGF" functionprop={testlog} />
        <Testfunctionprop testStr="TEST TESTGF" functionprop={() => { console.log("TEST FUNCTION LOG") }} /> */}
        {/* <Button title="ĐĂNG NHẬP" onPress={() => { console.log("Đã Nhấn Đăng nhập") }}></Button>
        <NutNhan tieude="ĐĂNG KÝ" sukiennhan={() => { console.log("TEST ĐĂNG KÝ") }} /> */}
        {/* <Text>TEST</Text>
        <NutNhan /> */}
        {/* <Task5 /> */}
        {/* <ClockTask /> */}
        {/* <ApiCall /> */}
        {/* <BaiTap1 /> */}
        {/* <BaiTap2 /> */}
        {/* <BaiTap3 /> */}
        <BaiTap5 />
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


