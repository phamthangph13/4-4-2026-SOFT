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
import LophocCSS from '../components/lophocsscungphuc'
import CSSPart2 from '../components/csspart2'
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
    <CSSPart2></CSSPart2>
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


