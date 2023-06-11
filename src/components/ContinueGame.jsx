import { useState } from 'react';
import inTown from '../images/puzzles/in-town.jpg';
import waldo from '../images/characters/waldo.png';
import wizard from '../images/characters/wizard.png';
import wilma from '../images/characters/wilma.png';
import odlaw from '../images/characters/odlaw.png';
// import '../firestore.temp';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ContinueGame = ({ illustrationPlaying }) => {

  const [currentlyTargeted, setCurrentlyTargeted] = useState('');

  const boxPopUp = (e) => {
    const dialogBox = document.querySelector('.character-dialog-box');
    if (currentlyTargeted) {
      currentlyTargeted.classList.remove('pop-up');
      setCurrentlyTargeted('');
      dialogBox.style.display = "none";
      dialogBox.classList.remove('show-left');
      dialogBox.classList.remove('show-right');
    } else {
      e.target.classList.add('pop-up');
      setCurrentlyTargeted(e.target);
      dialogBox.style.display = "block";
      if (e.clientX < window.innerWidth / 2) {
        dialogBox.classList.add('show-right');
      } else {
        dialogBox.classList.add('show-left');
      }
    }
  }

  const validateUserSelection = async (e) => {
    const feedback = document.querySelector('.feedback');
    feedback.style.display = 'block';
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, 'locations'));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      if (docData.illustration === 'in-town') {
        if (docData[e.target.textContent.toLowerCase()] == currentlyTargeted.getAttribute('data-element')) {
          currentlyTargeted.classList.add('found');
          feedback.classList.add('correct');
        } else {
          feedback.classList.add('wrong');
        }
      }
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
    feedback.style.display = 'none';
    feedback.classList.remove('correct', 'wrong');
  }

  return (
  <div 
    style={{ backgroundImage: `url(${inTown})` }}
    className="ContinueGame"
  >
    <div className="illustration-container">
      <div data-element="1" onClick={boxPopUp}></div>
      <div data-element="2" onClick={boxPopUp}></div>
      <div data-element="3" onClick={boxPopUp}></div>
      <div data-element="4" onClick={boxPopUp}></div>
      <div data-element="5" onClick={boxPopUp}></div>
      <div data-element="6" onClick={boxPopUp}></div>
      <div data-element="7" onClick={boxPopUp}></div>
      <div data-element="8" onClick={boxPopUp}></div>
      <div data-element="9" onClick={boxPopUp}></div>
      <div data-element="10" onClick={boxPopUp}></div>
      <div data-element="11" onClick={boxPopUp}></div>
      <div data-element="12" onClick={boxPopUp}></div>
      <div data-element="13" onClick={boxPopUp}></div>
      <div data-element="14" onClick={boxPopUp}></div>
      <div data-element="15" onClick={boxPopUp}></div>
      <div data-element="16" onClick={boxPopUp}></div>
      <div data-element="17" onClick={boxPopUp}></div>
      <div data-element="18" onClick={boxPopUp}></div>
      <div data-element="19" onClick={boxPopUp}></div>
      <div data-element="20" onClick={boxPopUp}></div>
      <div data-element="21" onClick={boxPopUp}></div>
      <div data-element="22" onClick={boxPopUp}></div>
      <div data-element="23" onClick={boxPopUp}></div>
      <div data-element="24" onClick={boxPopUp}></div>
      <div data-element="25" onClick={boxPopUp}></div>
      <div data-element="26" onClick={boxPopUp}></div>
      <div data-element="27" onClick={boxPopUp}></div>
      <div data-element="28" onClick={boxPopUp}></div>
      <div data-element="29" onClick={boxPopUp}></div>
      <div data-element="30" onClick={boxPopUp}></div>
      <div data-element="31" onClick={boxPopUp}></div>
      <div data-element="32" onClick={boxPopUp}></div>
      <div data-element="33" onClick={boxPopUp}></div>
      <div data-element="34" onClick={boxPopUp}></div>
      <div data-element="35" onClick={boxPopUp}></div>
      <div data-element="36" onClick={boxPopUp}></div>
      <div data-element="37" onClick={boxPopUp}></div>
      <div data-element="38" onClick={boxPopUp}></div>
      <div data-element="39" onClick={boxPopUp}></div>
      <div data-element="40" onClick={boxPopUp}></div>
      <div data-element="41" onClick={boxPopUp}></div>
      <div data-element="42" onClick={boxPopUp}></div>
      <div data-element="43" onClick={boxPopUp}></div>
      <div data-element="44" onClick={boxPopUp}></div>
      <div data-element="45" onClick={boxPopUp}></div>
      <div data-element="46" onClick={boxPopUp}></div>
      <div data-element="47" onClick={boxPopUp}></div>
      <div data-element="48" onClick={boxPopUp}></div>
      <div data-element="49" onClick={boxPopUp}></div>
      <div data-element="50" onClick={boxPopUp}></div>
      <div data-element="51" onClick={boxPopUp}></div>
      <div data-element="52" onClick={boxPopUp}></div>
      <div data-element="53" onClick={boxPopUp}></div>
      <div data-element="54" onClick={boxPopUp}></div>
      <div data-element="55" onClick={boxPopUp}></div>
      <div data-element="56" onClick={boxPopUp}></div>
      <div data-element="57" onClick={boxPopUp}></div>
      <div data-element="58" onClick={boxPopUp}></div>
      <div data-element="59" onClick={boxPopUp}></div>
      <div data-element="60" onClick={boxPopUp}></div>
      <div data-element="61" onClick={boxPopUp}></div>
      <div data-element="62" onClick={boxPopUp}></div>
      <div data-element="63" onClick={boxPopUp}></div>
      <div data-element="64" onClick={boxPopUp}></div>
      <div data-element="65" onClick={boxPopUp}></div>
      <div data-element="66" onClick={boxPopUp}></div>
      <div data-element="67" onClick={boxPopUp}></div>
      <div data-element="68" onClick={boxPopUp}></div>
      <div data-element="69" onClick={boxPopUp}></div>
      <div data-element="70" onClick={boxPopUp}></div>
      <div data-element="71" onClick={boxPopUp}></div>
      <div data-element="72" onClick={boxPopUp}></div>
      <div data-element="73" onClick={boxPopUp}></div>
      <div data-element="74" onClick={boxPopUp}></div>
      <div data-element="75" onClick={boxPopUp}></div>
      <div data-element="76" onClick={boxPopUp}></div>
      <div data-element="77" onClick={boxPopUp}></div>
      <div data-element="78" onClick={boxPopUp}></div>
      <div data-element="79" onClick={boxPopUp}></div>
      <div data-element="80" onClick={boxPopUp}></div>
      <div data-element="81" onClick={boxPopUp}></div>
      <div data-element="82" onClick={boxPopUp}></div>
      <div data-element="83" onClick={boxPopUp}></div>
      <div data-element="84" onClick={boxPopUp}></div>
      <div data-element="85" onClick={boxPopUp}></div>
      <div data-element="86" onClick={boxPopUp}></div>
      <div data-element="87" onClick={boxPopUp}></div>
      <div data-element="88" onClick={boxPopUp}></div>
      <div data-element="89" onClick={boxPopUp}></div>
      <div data-element="90" onClick={boxPopUp}></div>
      <div data-element="91" onClick={boxPopUp}></div>
      <div data-element="92" onClick={boxPopUp}></div>
      <div data-element="93" onClick={boxPopUp}></div>
      <div data-element="94" onClick={boxPopUp}></div>
      <div data-element="95" onClick={boxPopUp}></div>
      <div data-element="96" onClick={boxPopUp}></div>
      <div data-element="97" onClick={boxPopUp}></div>
      <div data-element="98" onClick={boxPopUp}></div>
      <div data-element="99" onClick={boxPopUp}></div>
      <div data-element="100" onClick={boxPopUp}></div>
      <div data-element="101" onClick={boxPopUp}></div>
      <div data-element="102" onClick={boxPopUp}></div>
      <div data-element="103" onClick={boxPopUp}></div>
      <div data-element="104" onClick={boxPopUp}></div>
      <div data-element="105" onClick={boxPopUp}></div>
      <div data-element="106" onClick={boxPopUp}></div>
      <div data-element="107" onClick={boxPopUp}></div>
      <div data-element="108" onClick={boxPopUp}></div>
      <div data-element="109" onClick={boxPopUp}></div>
      <div data-element="110" onClick={boxPopUp}></div>
      <div data-element="111" onClick={boxPopUp}></div>
      <div data-element="112" onClick={boxPopUp}></div>
      <div data-element="113" onClick={boxPopUp}></div>
      <div data-element="114" onClick={boxPopUp}></div>
      <div data-element="115" onClick={boxPopUp}></div>
      <div data-element="116" onClick={boxPopUp}></div>
      <div data-element="117" onClick={boxPopUp}></div>
      <div data-element="118" onClick={boxPopUp}></div>
      <div data-element="119" onClick={boxPopUp}></div>
      <div data-element="120" onClick={boxPopUp}></div>
      <div data-element="121" onClick={boxPopUp}></div>
      <div data-element="122" onClick={boxPopUp}></div>
      <div data-element="123" onClick={boxPopUp}></div>
      <div data-element="124" onClick={boxPopUp}></div>
      <div data-element="125" onClick={boxPopUp}></div>
      <div data-element="126" onClick={boxPopUp}></div>
      <div data-element="127" onClick={boxPopUp}></div>
      <div data-element="128" onClick={boxPopUp}></div>
      <div data-element="129" onClick={boxPopUp}></div>
      <div data-element="130" onClick={boxPopUp}></div>
      <div data-element="131" onClick={boxPopUp}></div>
      <div data-element="132" onClick={boxPopUp}></div>
      <div data-element="133" onClick={boxPopUp}></div>
      <div data-element="134" onClick={boxPopUp}></div>
      <div data-element="135" onClick={boxPopUp}></div>
      <div data-element="136" onClick={boxPopUp}></div>
      <div data-element="137" onClick={boxPopUp}></div>
      <div data-element="138" onClick={boxPopUp}></div>
      <div data-element="139" onClick={boxPopUp}></div>
      <div data-element="140" onClick={boxPopUp}></div>
      <div data-element="141" onClick={boxPopUp}></div>
      <div data-element="142" onClick={boxPopUp}></div>
      <div data-element="143" onClick={boxPopUp}></div>
      <div data-element="144" onClick={boxPopUp}></div>
      <div data-element="145" onClick={boxPopUp}></div>
      <div data-element="146" onClick={boxPopUp}></div>
      <div data-element="147" onClick={boxPopUp}></div>
      <div data-element="148" onClick={boxPopUp}></div>
      <div data-element="149" onClick={boxPopUp}></div>
      <div data-element="150" onClick={boxPopUp}></div>
      <div data-element="151" onClick={boxPopUp}></div>
      <div data-element="152" onClick={boxPopUp}></div>
      <div data-element="153" onClick={boxPopUp}></div>
      <div data-element="154" onClick={boxPopUp}></div>
      <div data-element="155" onClick={boxPopUp}></div>
      <div data-element="156" onClick={boxPopUp}></div>
      <div data-element="157" onClick={boxPopUp}></div>
      <div data-element="158" onClick={boxPopUp}></div>
      <div data-element="159" onClick={boxPopUp}></div>
      <div data-element="160" onClick={boxPopUp}></div>
      <div data-element="161" onClick={boxPopUp}></div>
      <div data-element="162" onClick={boxPopUp}></div>
      <div data-element="163" onClick={boxPopUp}></div>
      <div data-element="164" onClick={boxPopUp}></div>
      <div data-element="165" onClick={boxPopUp}></div>
      <div data-element="166" onClick={boxPopUp}></div>
      <div data-element="167" onClick={boxPopUp}></div>
      <div data-element="168" onClick={boxPopUp}></div>
      <div data-element="169" onClick={boxPopUp}></div>
      <div data-element="170" onClick={boxPopUp}></div>
      <div data-element="171" onClick={boxPopUp}></div>
      <div data-element="172" onClick={boxPopUp}></div>
      <div data-element="173" onClick={boxPopUp}></div>
      <div data-element="174" onClick={boxPopUp}></div>
      <div data-element="175" onClick={boxPopUp}></div>
      <div data-element="176" onClick={boxPopUp}></div>
      <div data-element="177" onClick={boxPopUp}></div>
      <div data-element="178" onClick={boxPopUp}></div>
      <div data-element="179" onClick={boxPopUp}></div>
      <div data-element="180" onClick={boxPopUp}></div>
      <div data-element="181" onClick={boxPopUp}></div>
      <div data-element="182" onClick={boxPopUp}></div>
      <div data-element="183" onClick={boxPopUp}></div>
      <div data-element="184" onClick={boxPopUp}></div>
      <div data-element="185" onClick={boxPopUp}></div>
      <div data-element="186" onClick={boxPopUp}></div>
      <div data-element="187" onClick={boxPopUp}></div>
      <div data-element="188" onClick={boxPopUp}></div>
      <div data-element="189" onClick={boxPopUp}></div>
      <div data-element="190" onClick={boxPopUp}></div>
      <div data-element="191" onClick={boxPopUp}></div>
      <div data-element="192" onClick={boxPopUp}></div>
      <div data-element="193" onClick={boxPopUp}></div>
      <div data-element="194" onClick={boxPopUp}></div>
      <div data-element="195" onClick={boxPopUp}></div>
      <div data-element="196" onClick={boxPopUp}></div>
      <div data-element="197" onClick={boxPopUp}></div>
      <div data-element="198" onClick={boxPopUp}></div>
      <div data-element="199" onClick={boxPopUp}></div>
      <div data-element="200" onClick={boxPopUp}></div>
      <div data-element="201" onClick={boxPopUp}></div>
      <div data-element="202" onClick={boxPopUp}></div>
      <div data-element="203" onClick={boxPopUp}></div>
      <div data-element="204" onClick={boxPopUp}></div>
      <div data-element="205" onClick={boxPopUp}></div>
      <div data-element="206" onClick={boxPopUp}></div>
      <div data-element="207" onClick={boxPopUp}></div>
      <div data-element="208" onClick={boxPopUp}></div>
      <div data-element="209" onClick={boxPopUp}></div>
      <div data-element="210" onClick={boxPopUp}></div>
      <div data-element="211" onClick={boxPopUp}></div>
      <div data-element="212" onClick={boxPopUp}></div>
      <div data-element="213" onClick={boxPopUp}></div>
      <div data-element="214" onClick={boxPopUp}></div>
      <div data-element="215" onClick={boxPopUp}></div>
      <div data-element="216" onClick={boxPopUp}></div>
      <div data-element="217" onClick={boxPopUp}></div>
      <div data-element="218" onClick={boxPopUp}></div>
      <div data-element="219" onClick={boxPopUp}></div>
      <div data-element="220" onClick={boxPopUp}></div>
      <div data-element="221" onClick={boxPopUp}></div>
      <div data-element="222" onClick={boxPopUp}></div>
      <div data-element="223" onClick={boxPopUp}></div>
      <div data-element="224" onClick={boxPopUp}></div>
      <div data-element="225" onClick={boxPopUp}></div>
      <div data-element="226" onClick={boxPopUp}></div>
      <div data-element="227" onClick={boxPopUp}></div>
      <div data-element="228" onClick={boxPopUp}></div>
      <div data-element="229" onClick={boxPopUp}></div>
      <div data-element="230" onClick={boxPopUp}></div>
      <div data-element="231" onClick={boxPopUp}></div>
      <div data-element="232" onClick={boxPopUp}></div>
      <div data-element="233" onClick={boxPopUp}></div>
      <div data-element="234" onClick={boxPopUp}></div>
      <div data-element="235" onClick={boxPopUp}></div>
      <div data-element="236" onClick={boxPopUp}></div>
      <div data-element="237" onClick={boxPopUp}></div>
      <div data-element="238" onClick={boxPopUp}></div>
      <div data-element="239" onClick={boxPopUp}></div>
      <div data-element="240" onClick={boxPopUp}></div>
      <div data-element="241" onClick={boxPopUp}></div>
      <div data-element="242" onClick={boxPopUp}></div>
      <div data-element="243" onClick={boxPopUp}></div>
      <div data-element="244" onClick={boxPopUp}></div>
      <div data-element="245" onClick={boxPopUp}></div>
      <div data-element="246" onClick={boxPopUp}></div>
      <div data-element="247" onClick={boxPopUp}></div>
      <div data-element="248" onClick={boxPopUp}></div>
      <div data-element="249" onClick={boxPopUp}></div>
      <div data-element="250" onClick={boxPopUp}></div>
      <div data-element="251" onClick={boxPopUp}></div>
      <div data-element="252" onClick={boxPopUp}></div>
      <div data-element="253" onClick={boxPopUp}></div>
      <div data-element="254" onClick={boxPopUp}></div>
      <div data-element="255" onClick={boxPopUp}></div>
      <div data-element="256" onClick={boxPopUp}></div>
      <div data-element="257" onClick={boxPopUp}></div>
      <div data-element="258" onClick={boxPopUp}></div>
      <div data-element="259" onClick={boxPopUp}></div>
      <div data-element="260" onClick={boxPopUp}></div>
      <div data-element="261" onClick={boxPopUp}></div>
      <div data-element="262" onClick={boxPopUp}></div>
      <div data-element="263" onClick={boxPopUp}></div>
      <div data-element="264" onClick={boxPopUp}></div>
      <div data-element="265" onClick={boxPopUp}></div>
      <div data-element="266" onClick={boxPopUp}></div>
      <div data-element="267" onClick={boxPopUp}></div>
      <div data-element="268" onClick={boxPopUp}></div>
      <div data-element="269" onClick={boxPopUp}></div>
      <div data-element="270" onClick={boxPopUp}></div>
      <div data-element="271" onClick={boxPopUp}></div>
      <div data-element="272" onClick={boxPopUp}></div>
      <div data-element="273" onClick={boxPopUp}></div>
      <div data-element="274" onClick={boxPopUp}></div>
      <div data-element="275" onClick={boxPopUp}></div>
      <div data-element="276" onClick={boxPopUp}></div>
      <div data-element="277" onClick={boxPopUp}></div>
      <div data-element="278" onClick={boxPopUp}></div>
      <div data-element="279" onClick={boxPopUp}></div>
      <div data-element="280" onClick={boxPopUp}></div>
      <div data-element="281" onClick={boxPopUp}></div>
      <div data-element="282" onClick={boxPopUp}></div>
      <div data-element="283" onClick={boxPopUp}></div>
      <div data-element="284" onClick={boxPopUp}></div>
      <div data-element="285" onClick={boxPopUp}></div>
      <div data-element="286" onClick={boxPopUp}></div>
      <div data-element="287" onClick={boxPopUp}></div>
      <div data-element="288" onClick={boxPopUp}></div>
      <div data-element="289" onClick={boxPopUp}></div>
      <div data-element="290" onClick={boxPopUp}></div>
      <div data-element="291" onClick={boxPopUp}></div>
      <div data-element="292" onClick={boxPopUp}></div>
      <div data-element="293" onClick={boxPopUp}></div>
      <div data-element="294" onClick={boxPopUp}></div>
      <div data-element="295" onClick={boxPopUp}></div>
      <div data-element="296" onClick={boxPopUp}></div>
      <div data-element="297" onClick={boxPopUp}></div>
      <div data-element="298" onClick={boxPopUp}></div>
      <div data-element="299" onClick={boxPopUp}></div>
      <div data-element="300" onClick={boxPopUp}></div>
      <div data-element="301" onClick={boxPopUp}></div>
      <div data-element="302" onClick={boxPopUp}></div>
      <div data-element="303" onClick={boxPopUp}></div>
      <div data-element="304" onClick={boxPopUp}></div>
      <div data-element="305" onClick={boxPopUp}></div>
      <div data-element="306" onClick={boxPopUp}></div>
      <div data-element="307" onClick={boxPopUp}></div>
      <div data-element="308" onClick={boxPopUp}></div>
      <div data-element="309" onClick={boxPopUp}></div>
      <div data-element="310" onClick={boxPopUp}></div>
      <div data-element="311" onClick={boxPopUp}></div>
      <div data-element="312" onClick={boxPopUp}></div>
      <div data-element="313" onClick={boxPopUp}></div>
      <div data-element="314" onClick={boxPopUp}></div>
      <div data-element="315" onClick={boxPopUp}></div>
      <div data-element="316" onClick={boxPopUp}></div>
      <div data-element="317" onClick={boxPopUp}></div>
      <div data-element="318" onClick={boxPopUp}></div>
      <div data-element="319" onClick={boxPopUp}></div>
      <div data-element="320" onClick={boxPopUp}></div>
      <div data-element="321" onClick={boxPopUp}></div>
      <div data-element="322" onClick={boxPopUp}></div>
      <div data-element="323" onClick={boxPopUp}></div>
      <div data-element="324" onClick={boxPopUp}></div>
      <div data-element="325" onClick={boxPopUp}></div>
      <div data-element="326" onClick={boxPopUp}></div>
      <div data-element="327" onClick={boxPopUp}></div>
      <div data-element="328" onClick={boxPopUp}></div>
      <div data-element="329" onClick={boxPopUp}></div>
      <div data-element="330" onClick={boxPopUp}></div>
      <div data-element="331" onClick={boxPopUp}></div>
      <div data-element="332" onClick={boxPopUp}></div>
      <div data-element="333" onClick={boxPopUp}></div>
      <div data-element="334" onClick={boxPopUp}></div>
      <div data-element="335" onClick={boxPopUp}></div>
      <div data-element="336" onClick={boxPopUp}></div>
      <div data-element="337" onClick={boxPopUp}></div>
      <div data-element="338" onClick={boxPopUp}></div>
      <div data-element="339" onClick={boxPopUp}></div>
      <div data-element="340" onClick={boxPopUp}></div>
      <div data-element="341" onClick={boxPopUp}></div>
      <div data-element="342" onClick={boxPopUp}></div>
      <div data-element="343" onClick={boxPopUp}></div>
      <div data-element="344" onClick={boxPopUp}></div>
      <div data-element="345" onClick={boxPopUp}></div>
      <div data-element="346" onClick={boxPopUp}></div>
      <div data-element="347" onClick={boxPopUp}></div>
      <div data-element="348" onClick={boxPopUp}></div>
      <div data-element="349" onClick={boxPopUp}></div>
      <div data-element="350" onClick={boxPopUp}></div>
      <div data-element="351" onClick={boxPopUp}></div>
      <div data-element="352" onClick={boxPopUp}></div>
      <div data-element="353" onClick={boxPopUp}></div>
      <div data-element="354" onClick={boxPopUp}></div>
      <div data-element="355" onClick={boxPopUp}></div>
      <div data-element="356" onClick={boxPopUp}></div>
      <div data-element="357" onClick={boxPopUp}></div>
      <div data-element="358" onClick={boxPopUp}></div>
      <div data-element="359" onClick={boxPopUp}></div>
      <div data-element="360" onClick={boxPopUp}></div>
      <div data-element="361" onClick={boxPopUp}></div>
      <div data-element="362" onClick={boxPopUp}></div>
      <div data-element="363" onClick={boxPopUp}></div>
      <div data-element="364" onClick={boxPopUp}></div>
      <div data-element="365" onClick={boxPopUp}></div>
      <div data-element="366" onClick={boxPopUp}></div>
      <div data-element="367" onClick={boxPopUp}></div>
      <div data-element="368" onClick={boxPopUp}></div>
      <div data-element="369" onClick={boxPopUp}></div>
      <div data-element="370" onClick={boxPopUp}></div>
      <div data-element="371" onClick={boxPopUp}></div>
      <div data-element="372" onClick={boxPopUp}></div>
      <div data-element="373" onClick={boxPopUp}></div>
      <div data-element="374" onClick={boxPopUp}></div>
      <div data-element="375" onClick={boxPopUp}></div>
      <div data-element="376" onClick={boxPopUp}></div>
      <div data-element="377" onClick={boxPopUp}></div>
      <div data-element="378" onClick={boxPopUp}></div>
      <div data-element="379" onClick={boxPopUp}></div>
      <div data-element="380" onClick={boxPopUp}></div>
      <div data-element="381" onClick={boxPopUp}></div>
      <div data-element="382" onClick={boxPopUp}></div>
      <div data-element="383" onClick={boxPopUp}></div>
      <div data-element="384" onClick={boxPopUp}></div>
      <div data-element="385" onClick={boxPopUp}></div>
      <div data-element="386" onClick={boxPopUp}></div>
      <div data-element="387" onClick={boxPopUp}></div>
      <div data-element="388" onClick={boxPopUp}></div>
      <div data-element="389" onClick={boxPopUp}></div>
      <div data-element="390" onClick={boxPopUp}></div>
      <div data-element="391" onClick={boxPopUp}></div>
      <div data-element="392" onClick={boxPopUp}></div>
      <div data-element="393" onClick={boxPopUp}></div>
      <div data-element="394" onClick={boxPopUp}></div>
      <div data-element="395" onClick={boxPopUp}></div>
      <div data-element="396" onClick={boxPopUp}></div>
      <div data-element="397" onClick={boxPopUp}></div>
      <div data-element="398" onClick={boxPopUp}></div>
      <div data-element="399" onClick={boxPopUp}></div>
      <div data-element="400" onClick={boxPopUp}></div>
    </div>
    <div className="character-dialog-box" style={{ display: "none" }}>
      <div className="who-is-it-question">Who is it?</div>
      <div className="character-cards">
        <div onClick={validateUserSelection}>
          <div 
            style={{ backgroundImage: `url(${waldo})` }}
            className="character-pic"
          >
          </div>
          <div className="character-name">Waldo</div>
        </div>
        <hr />
        <div onClick={validateUserSelection}>
          <div 
            style={{ backgroundImage: `url(${wizard})` }}
            className="character-pic"
          >
          </div>
          <div className="character-name">Wizard</div>
        </div>
        <hr />
        <div onClick={validateUserSelection}>
          <div 
            style={{ backgroundImage: `url(${wilma})` }}
            className="character-pic"
          >
          </div>
          <div className="character-name">Wilma</div>
        </div>
        <hr />
        <div onClick={validateUserSelection}>
          <div 
            style={{ backgroundImage: `url(${odlaw})` }}
            className="character-pic"
          >
          </div>
          <div className="character-name">Odlaw</div>
        </div>
      </div>
    </div>
    <img className='feedback' style={{ display: "none" }} />
  </div>
  );
};

export default ContinueGame;

