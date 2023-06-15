import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import inTown from "../images/puzzles/in-town.jpg";
import waldo from "../images/characters/waldo.png";
import wizard from "../images/characters/wizard.png";
import wilma from "../images/characters/wilma.png";
import odlaw from "../images/characters/odlaw.png";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const PlayGame = () => {
  const [currentlyTargeted, setCurrentlyTargeted] = useState('');
  const [foundCnt, setFoundCnt] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (foundCnt === 1) {
      const confetti = document.querySelector('.confetti-screen');
      confetti.style.display = 'block';
      setTimeout(() => {
        navigate('/enter-name');
      }, 2000);
    }
  }, [foundCnt]);

  const toggleBoxPopUp = (e) => {
    const dialogBox = document.querySelector('.character-dialog-box');
    if (currentlyTargeted) {
      currentlyTargeted.classList.remove('pop-up');
      setCurrentlyTargeted('');

      dialogBox.style.display = 'none';
      dialogBox.classList.remove('show-left');
      dialogBox.classList.remove('show-right');
    } else if (!e.target.classList.contains('found') && foundCnt !== 4) {
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
    toggleBoxPopUp(e);

    const feedback = document.querySelector('.feedback');
    feedback.style.display = 'block';

    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, 'locations'));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      if (docData.illustration === 'in-town') {
        let target = e.target;
        if (target.classList.contains('character-pic')) {
          target = target.parentElement;
        }
        if (docData[target.textContent.toLowerCase()].toString() === currentlyTargeted.getAttribute('data-element')) {
          currentlyTargeted.classList.add('found');
          feedback.classList.add('correct');
          setFoundCnt(foundCnt + 1);
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
      className="PlayGame"
    >
      <div className="illustration-container">
        <div data-element="1" onClick={toggleBoxPopUp}></div>
        <div data-element="2" onClick={toggleBoxPopUp}></div>
        <div data-element="3" onClick={toggleBoxPopUp}></div>
        <div data-element="4" onClick={toggleBoxPopUp}></div>
        <div data-element="5" onClick={toggleBoxPopUp}></div>
        <div data-element="6" onClick={toggleBoxPopUp}></div>
        <div data-element="7" onClick={toggleBoxPopUp}></div>
        <div data-element="8" onClick={toggleBoxPopUp}></div>
        <div data-element="9" onClick={toggleBoxPopUp}></div>
        <div data-element="10" onClick={toggleBoxPopUp}></div>
        <div data-element="11" onClick={toggleBoxPopUp}></div>
        <div data-element="12" onClick={toggleBoxPopUp}></div>
        <div data-element="13" onClick={toggleBoxPopUp}></div>
        <div data-element="14" onClick={toggleBoxPopUp}></div>
        <div data-element="15" onClick={toggleBoxPopUp}></div>
        <div data-element="16" onClick={toggleBoxPopUp}></div>
        <div data-element="17" onClick={toggleBoxPopUp}></div>
        <div data-element="18" onClick={toggleBoxPopUp}></div>
        <div data-element="19" onClick={toggleBoxPopUp}></div>
        <div data-element="20" onClick={toggleBoxPopUp}></div>
        <div data-element="21" onClick={toggleBoxPopUp}></div>
        <div data-element="22" onClick={toggleBoxPopUp}></div>
        <div data-element="23" onClick={toggleBoxPopUp}></div>
        <div data-element="24" onClick={toggleBoxPopUp}></div>
        <div data-element="25" onClick={toggleBoxPopUp}></div>
        <div data-element="26" onClick={toggleBoxPopUp}></div>
        <div data-element="27" onClick={toggleBoxPopUp}></div>
        <div data-element="28" onClick={toggleBoxPopUp}></div>
        <div data-element="29" onClick={toggleBoxPopUp}></div>
        <div data-element="30" onClick={toggleBoxPopUp}></div>
        <div data-element="31" onClick={toggleBoxPopUp}></div>
        <div data-element="32" onClick={toggleBoxPopUp}></div>
        <div data-element="33" onClick={toggleBoxPopUp}></div>
        <div data-element="34" onClick={toggleBoxPopUp}></div>
        <div data-element="35" onClick={toggleBoxPopUp}></div>
        <div data-element="36" onClick={toggleBoxPopUp}></div>
        <div data-element="37" onClick={toggleBoxPopUp}></div>
        <div data-element="38" onClick={toggleBoxPopUp}></div>
        <div data-element="39" onClick={toggleBoxPopUp}></div>
        <div data-element="40" onClick={toggleBoxPopUp}></div>
        <div data-element="41" onClick={toggleBoxPopUp}></div>
        <div data-element="42" onClick={toggleBoxPopUp}></div>
        <div data-element="43" onClick={toggleBoxPopUp}></div>
        <div data-element="44" onClick={toggleBoxPopUp}></div>
        <div data-element="45" onClick={toggleBoxPopUp}></div>
        <div data-element="46" onClick={toggleBoxPopUp}></div>
        <div data-element="47" onClick={toggleBoxPopUp}></div>
        <div data-element="48" onClick={toggleBoxPopUp}></div>
        <div data-element="49" onClick={toggleBoxPopUp}></div>
        <div data-element="50" onClick={toggleBoxPopUp}></div>
        <div data-element="51" onClick={toggleBoxPopUp}></div>
        <div data-element="52" onClick={toggleBoxPopUp}></div>
        <div data-element="53" onClick={toggleBoxPopUp}></div>
        <div data-element="54" onClick={toggleBoxPopUp}></div>
        <div data-element="55" onClick={toggleBoxPopUp}></div>
        <div data-element="56" onClick={toggleBoxPopUp}></div>
        <div data-element="57" onClick={toggleBoxPopUp}></div>
        <div data-element="58" onClick={toggleBoxPopUp}></div>
        <div data-element="59" onClick={toggleBoxPopUp}></div>
        <div data-element="60" onClick={toggleBoxPopUp}></div>
        <div data-element="61" onClick={toggleBoxPopUp}></div>
        <div data-element="62" onClick={toggleBoxPopUp}></div>
        <div data-element="63" onClick={toggleBoxPopUp}></div>
        <div data-element="64" onClick={toggleBoxPopUp}></div>
        <div data-element="65" onClick={toggleBoxPopUp}></div>
        <div data-element="66" onClick={toggleBoxPopUp}></div>
        <div data-element="67" onClick={toggleBoxPopUp}></div>
        <div data-element="68" onClick={toggleBoxPopUp}></div>
        <div data-element="69" onClick={toggleBoxPopUp}></div>
        <div data-element="70" onClick={toggleBoxPopUp}></div>
        <div data-element="71" onClick={toggleBoxPopUp}></div>
        <div data-element="72" onClick={toggleBoxPopUp}></div>
        <div data-element="73" onClick={toggleBoxPopUp}></div>
        <div data-element="74" onClick={toggleBoxPopUp}></div>
        <div data-element="75" onClick={toggleBoxPopUp}></div>
        <div data-element="76" onClick={toggleBoxPopUp}></div>
        <div data-element="77" onClick={toggleBoxPopUp}></div>
        <div data-element="78" onClick={toggleBoxPopUp}></div>
        <div data-element="79" onClick={toggleBoxPopUp}></div>
        <div data-element="80" onClick={toggleBoxPopUp}></div>
        <div data-element="81" onClick={toggleBoxPopUp}></div>
        <div data-element="82" onClick={toggleBoxPopUp}></div>
        <div data-element="83" onClick={toggleBoxPopUp}></div>
        <div data-element="84" onClick={toggleBoxPopUp}></div>
        <div data-element="85" onClick={toggleBoxPopUp}></div>
        <div data-element="86" onClick={toggleBoxPopUp}></div>
        <div data-element="87" onClick={toggleBoxPopUp}></div>
        <div data-element="88" onClick={toggleBoxPopUp}></div>
        <div data-element="89" onClick={toggleBoxPopUp}></div>
        <div data-element="90" onClick={toggleBoxPopUp}></div>
        <div data-element="91" onClick={toggleBoxPopUp}></div>
        <div data-element="92" onClick={toggleBoxPopUp}></div>
        <div data-element="93" onClick={toggleBoxPopUp}></div>
        <div data-element="94" onClick={toggleBoxPopUp}></div>
        <div data-element="95" onClick={toggleBoxPopUp}></div>
        <div data-element="96" onClick={toggleBoxPopUp}></div>
        <div data-element="97" onClick={toggleBoxPopUp}></div>
        <div data-element="98" onClick={toggleBoxPopUp}></div>
        <div data-element="99" onClick={toggleBoxPopUp}></div>
        <div data-element="100" onClick={toggleBoxPopUp}></div>
        <div data-element="101" onClick={toggleBoxPopUp}></div>
        <div data-element="102" onClick={toggleBoxPopUp}></div>
        <div data-element="103" onClick={toggleBoxPopUp}></div>
        <div data-element="104" onClick={toggleBoxPopUp}></div>
        <div data-element="105" onClick={toggleBoxPopUp}></div>
        <div data-element="106" onClick={toggleBoxPopUp}></div>
        <div data-element="107" onClick={toggleBoxPopUp}></div>
        <div data-element="108" onClick={toggleBoxPopUp}></div>
        <div data-element="109" onClick={toggleBoxPopUp}></div>
        <div data-element="110" onClick={toggleBoxPopUp}></div>
        <div data-element="111" onClick={toggleBoxPopUp}></div>
        <div data-element="112" onClick={toggleBoxPopUp}></div>
        <div data-element="113" onClick={toggleBoxPopUp}></div>
        <div data-element="114" onClick={toggleBoxPopUp}></div>
        <div data-element="115" onClick={toggleBoxPopUp}></div>
        <div data-element="116" onClick={toggleBoxPopUp}></div>
        <div data-element="117" onClick={toggleBoxPopUp}></div>
        <div data-element="118" onClick={toggleBoxPopUp}></div>
        <div data-element="119" onClick={toggleBoxPopUp}></div>
        <div data-element="120" onClick={toggleBoxPopUp}></div>
        <div data-element="121" onClick={toggleBoxPopUp}></div>
        <div data-element="122" onClick={toggleBoxPopUp}></div>
        <div data-element="123" onClick={toggleBoxPopUp}></div>
        <div data-element="124" onClick={toggleBoxPopUp}></div>
        <div data-element="125" onClick={toggleBoxPopUp}></div>
        <div data-element="126" onClick={toggleBoxPopUp}></div>
        <div data-element="127" onClick={toggleBoxPopUp}></div>
        <div data-element="128" onClick={toggleBoxPopUp}></div>
        <div data-element="129" onClick={toggleBoxPopUp}></div>
        <div data-element="130" onClick={toggleBoxPopUp}></div>
        <div data-element="131" onClick={toggleBoxPopUp}></div>
        <div data-element="132" onClick={toggleBoxPopUp}></div>
        <div data-element="133" onClick={toggleBoxPopUp}></div>
        <div data-element="134" onClick={toggleBoxPopUp}></div>
        <div data-element="135" onClick={toggleBoxPopUp}></div>
        <div data-element="136" onClick={toggleBoxPopUp}></div>
        <div data-element="137" onClick={toggleBoxPopUp}></div>
        <div data-element="138" onClick={toggleBoxPopUp}></div>
        <div data-element="139" onClick={toggleBoxPopUp}></div>
        <div data-element="140" onClick={toggleBoxPopUp}></div>
        <div data-element="141" onClick={toggleBoxPopUp}></div>
        <div data-element="142" onClick={toggleBoxPopUp}></div>
        <div data-element="143" onClick={toggleBoxPopUp}></div>
        <div data-element="144" onClick={toggleBoxPopUp}></div>
        <div data-element="145" onClick={toggleBoxPopUp}></div>
        <div data-element="146" onClick={toggleBoxPopUp}></div>
        <div data-element="147" onClick={toggleBoxPopUp}></div>
        <div data-element="148" onClick={toggleBoxPopUp}></div>
        <div data-element="149" onClick={toggleBoxPopUp}></div>
        <div data-element="150" onClick={toggleBoxPopUp}></div>
        <div data-element="151" onClick={toggleBoxPopUp}></div>
        <div data-element="152" onClick={toggleBoxPopUp}></div>
        <div data-element="153" onClick={toggleBoxPopUp}></div>
        <div data-element="154" onClick={toggleBoxPopUp}></div>
        <div data-element="155" onClick={toggleBoxPopUp}></div>
        <div data-element="156" onClick={toggleBoxPopUp}></div>
        <div data-element="157" onClick={toggleBoxPopUp}></div>
        <div data-element="158" onClick={toggleBoxPopUp}></div>
        <div data-element="159" onClick={toggleBoxPopUp}></div>
        <div data-element="160" onClick={toggleBoxPopUp}></div>
        <div data-element="161" onClick={toggleBoxPopUp}></div>
        <div data-element="162" onClick={toggleBoxPopUp}></div>
        <div data-element="163" onClick={toggleBoxPopUp}></div>
        <div data-element="164" onClick={toggleBoxPopUp}></div>
        <div data-element="165" onClick={toggleBoxPopUp}></div>
        <div data-element="166" onClick={toggleBoxPopUp}></div>
        <div data-element="167" onClick={toggleBoxPopUp}></div>
        <div data-element="168" onClick={toggleBoxPopUp}></div>
        <div data-element="169" onClick={toggleBoxPopUp}></div>
        <div data-element="170" onClick={toggleBoxPopUp}></div>
        <div data-element="171" onClick={toggleBoxPopUp}></div>
        <div data-element="172" onClick={toggleBoxPopUp}></div>
        <div data-element="173" onClick={toggleBoxPopUp}></div>
        <div data-element="174" onClick={toggleBoxPopUp}></div>
        <div data-element="175" onClick={toggleBoxPopUp}></div>
        <div data-element="176" onClick={toggleBoxPopUp}></div>
        <div data-element="177" onClick={toggleBoxPopUp}></div>
        <div data-element="178" onClick={toggleBoxPopUp}></div>
        <div data-element="179" onClick={toggleBoxPopUp}></div>
        <div data-element="180" onClick={toggleBoxPopUp}></div>
        <div data-element="181" onClick={toggleBoxPopUp}></div>
        <div data-element="182" onClick={toggleBoxPopUp}></div>
        <div data-element="183" onClick={toggleBoxPopUp}></div>
        <div data-element="184" onClick={toggleBoxPopUp}></div>
        <div data-element="185" onClick={toggleBoxPopUp}></div>
        <div data-element="186" onClick={toggleBoxPopUp}></div>
        <div data-element="187" onClick={toggleBoxPopUp}></div>
        <div data-element="188" onClick={toggleBoxPopUp}></div>
        <div data-element="189" onClick={toggleBoxPopUp}></div>
        <div data-element="190" onClick={toggleBoxPopUp}></div>
        <div data-element="191" onClick={toggleBoxPopUp}></div>
        <div data-element="192" onClick={toggleBoxPopUp}></div>
        <div data-element="193" onClick={toggleBoxPopUp}></div>
        <div data-element="194" onClick={toggleBoxPopUp}></div>
        <div data-element="195" onClick={toggleBoxPopUp}></div>
        <div data-element="196" onClick={toggleBoxPopUp}></div>
        <div data-element="197" onClick={toggleBoxPopUp}></div>
        <div data-element="198" onClick={toggleBoxPopUp}></div>
        <div data-element="199" onClick={toggleBoxPopUp}></div>
        <div data-element="200" onClick={toggleBoxPopUp}></div>
        <div data-element="201" onClick={toggleBoxPopUp}></div>
        <div data-element="202" onClick={toggleBoxPopUp}></div>
        <div data-element="203" onClick={toggleBoxPopUp}></div>
        <div data-element="204" onClick={toggleBoxPopUp}></div>
        <div data-element="205" onClick={toggleBoxPopUp}></div>
        <div data-element="206" onClick={toggleBoxPopUp}></div>
        <div data-element="207" onClick={toggleBoxPopUp}></div>
        <div data-element="208" onClick={toggleBoxPopUp}></div>
        <div data-element="209" onClick={toggleBoxPopUp}></div>
        <div data-element="210" onClick={toggleBoxPopUp}></div>
        <div data-element="211" onClick={toggleBoxPopUp}></div>
        <div data-element="212" onClick={toggleBoxPopUp}></div>
        <div data-element="213" onClick={toggleBoxPopUp}></div>
        <div data-element="214" onClick={toggleBoxPopUp}></div>
        <div data-element="215" onClick={toggleBoxPopUp}></div>
        <div data-element="216" onClick={toggleBoxPopUp}></div>
        <div data-element="217" onClick={toggleBoxPopUp}></div>
        <div data-element="218" onClick={toggleBoxPopUp}></div>
        <div data-element="219" onClick={toggleBoxPopUp}></div>
        <div data-element="220" onClick={toggleBoxPopUp}></div>
        <div data-element="221" onClick={toggleBoxPopUp}></div>
        <div data-element="222" onClick={toggleBoxPopUp}></div>
        <div data-element="223" onClick={toggleBoxPopUp}></div>
        <div data-element="224" onClick={toggleBoxPopUp}></div>
        <div data-element="225" onClick={toggleBoxPopUp}></div>
        <div data-element="226" onClick={toggleBoxPopUp}></div>
        <div data-element="227" onClick={toggleBoxPopUp}></div>
        <div data-element="228" onClick={toggleBoxPopUp}></div>
        <div data-element="229" onClick={toggleBoxPopUp}></div>
        <div data-element="230" onClick={toggleBoxPopUp}></div>
        <div data-element="231" onClick={toggleBoxPopUp}></div>
        <div data-element="232" onClick={toggleBoxPopUp}></div>
        <div data-element="233" onClick={toggleBoxPopUp}></div>
        <div data-element="234" onClick={toggleBoxPopUp}></div>
        <div data-element="235" onClick={toggleBoxPopUp}></div>
        <div data-element="236" onClick={toggleBoxPopUp}></div>
        <div data-element="237" onClick={toggleBoxPopUp}></div>
        <div data-element="238" onClick={toggleBoxPopUp}></div>
        <div data-element="239" onClick={toggleBoxPopUp}></div>
        <div data-element="240" onClick={toggleBoxPopUp}></div>
        <div data-element="241" onClick={toggleBoxPopUp}></div>
        <div data-element="242" onClick={toggleBoxPopUp}></div>
        <div data-element="243" onClick={toggleBoxPopUp}></div>
        <div data-element="244" onClick={toggleBoxPopUp}></div>
        <div data-element="245" onClick={toggleBoxPopUp}></div>
        <div data-element="246" onClick={toggleBoxPopUp}></div>
        <div data-element="247" onClick={toggleBoxPopUp}></div>
        <div data-element="248" onClick={toggleBoxPopUp}></div>
        <div data-element="249" onClick={toggleBoxPopUp}></div>
        <div data-element="250" onClick={toggleBoxPopUp}></div>
        <div data-element="251" onClick={toggleBoxPopUp}></div>
        <div data-element="252" onClick={toggleBoxPopUp}></div>
        <div data-element="253" onClick={toggleBoxPopUp}></div>
        <div data-element="254" onClick={toggleBoxPopUp}></div>
        <div data-element="255" onClick={toggleBoxPopUp}></div>
        <div data-element="256" onClick={toggleBoxPopUp}></div>
        <div data-element="257" onClick={toggleBoxPopUp}></div>
        <div data-element="258" onClick={toggleBoxPopUp}></div>
        <div data-element="259" onClick={toggleBoxPopUp}></div>
        <div data-element="260" onClick={toggleBoxPopUp}></div>
        <div data-element="261" onClick={toggleBoxPopUp}></div>
        <div data-element="262" onClick={toggleBoxPopUp}></div>
        <div data-element="263" onClick={toggleBoxPopUp}></div>
        <div data-element="264" onClick={toggleBoxPopUp}></div>
        <div data-element="265" onClick={toggleBoxPopUp}></div>
        <div data-element="266" onClick={toggleBoxPopUp}></div>
        <div data-element="267" onClick={toggleBoxPopUp}></div>
        <div data-element="268" onClick={toggleBoxPopUp}></div>
        <div data-element="269" onClick={toggleBoxPopUp}></div>
        <div data-element="270" onClick={toggleBoxPopUp}></div>
        <div data-element="271" onClick={toggleBoxPopUp}></div>
        <div data-element="272" onClick={toggleBoxPopUp}></div>
        <div data-element="273" onClick={toggleBoxPopUp}></div>
        <div data-element="274" onClick={toggleBoxPopUp}></div>
        <div data-element="275" onClick={toggleBoxPopUp}></div>
        <div data-element="276" onClick={toggleBoxPopUp}></div>
        <div data-element="277" onClick={toggleBoxPopUp}></div>
        <div data-element="278" onClick={toggleBoxPopUp}></div>
        <div data-element="279" onClick={toggleBoxPopUp}></div>
        <div data-element="280" onClick={toggleBoxPopUp}></div>
        <div data-element="281" onClick={toggleBoxPopUp}></div>
        <div data-element="282" onClick={toggleBoxPopUp}></div>
        <div data-element="283" onClick={toggleBoxPopUp}></div>
        <div data-element="284" onClick={toggleBoxPopUp}></div>
        <div data-element="285" onClick={toggleBoxPopUp}></div>
        <div data-element="286" onClick={toggleBoxPopUp}></div>
        <div data-element="287" onClick={toggleBoxPopUp}></div>
        <div data-element="288" onClick={toggleBoxPopUp}></div>
        <div data-element="289" onClick={toggleBoxPopUp}></div>
        <div data-element="290" onClick={toggleBoxPopUp}></div>
        <div data-element="291" onClick={toggleBoxPopUp}></div>
        <div data-element="292" onClick={toggleBoxPopUp}></div>
        <div data-element="293" onClick={toggleBoxPopUp}></div>
        <div data-element="294" onClick={toggleBoxPopUp}></div>
        <div data-element="295" onClick={toggleBoxPopUp}></div>
        <div data-element="296" onClick={toggleBoxPopUp}></div>
        <div data-element="297" onClick={toggleBoxPopUp}></div>
        <div data-element="298" onClick={toggleBoxPopUp}></div>
        <div data-element="299" onClick={toggleBoxPopUp}></div>
        <div data-element="300" onClick={toggleBoxPopUp}></div>
        <div data-element="301" onClick={toggleBoxPopUp}></div>
        <div data-element="302" onClick={toggleBoxPopUp}></div>
        <div data-element="303" onClick={toggleBoxPopUp}></div>
        <div data-element="304" onClick={toggleBoxPopUp}></div>
        <div data-element="305" onClick={toggleBoxPopUp}></div>
        <div data-element="306" onClick={toggleBoxPopUp}></div>
        <div data-element="307" onClick={toggleBoxPopUp}></div>
        <div data-element="308" onClick={toggleBoxPopUp}></div>
        <div data-element="309" onClick={toggleBoxPopUp}></div>
        <div data-element="310" onClick={toggleBoxPopUp}></div>
        <div data-element="311" onClick={toggleBoxPopUp}></div>
        <div data-element="312" onClick={toggleBoxPopUp}></div>
        <div data-element="313" onClick={toggleBoxPopUp}></div>
        <div data-element="314" onClick={toggleBoxPopUp}></div>
        <div data-element="315" onClick={toggleBoxPopUp}></div>
        <div data-element="316" onClick={toggleBoxPopUp}></div>
        <div data-element="317" onClick={toggleBoxPopUp}></div>
        <div data-element="318" onClick={toggleBoxPopUp}></div>
        <div data-element="319" onClick={toggleBoxPopUp}></div>
        <div data-element="320" onClick={toggleBoxPopUp}></div>
        <div data-element="321" onClick={toggleBoxPopUp}></div>
        <div data-element="322" onClick={toggleBoxPopUp}></div>
        <div data-element="323" onClick={toggleBoxPopUp}></div>
        <div data-element="324" onClick={toggleBoxPopUp}></div>
        <div data-element="325" onClick={toggleBoxPopUp}></div>
        <div data-element="326" onClick={toggleBoxPopUp}></div>
        <div data-element="327" onClick={toggleBoxPopUp}></div>
        <div data-element="328" onClick={toggleBoxPopUp}></div>
        <div data-element="329" onClick={toggleBoxPopUp}></div>
        <div data-element="330" onClick={toggleBoxPopUp}></div>
        <div data-element="331" onClick={toggleBoxPopUp}></div>
        <div data-element="332" onClick={toggleBoxPopUp}></div>
        <div data-element="333" onClick={toggleBoxPopUp}></div>
        <div data-element="334" onClick={toggleBoxPopUp}></div>
        <div data-element="335" onClick={toggleBoxPopUp}></div>
        <div data-element="336" onClick={toggleBoxPopUp}></div>
        <div data-element="337" onClick={toggleBoxPopUp}></div>
        <div data-element="338" onClick={toggleBoxPopUp}></div>
        <div data-element="339" onClick={toggleBoxPopUp}></div>
        <div data-element="340" onClick={toggleBoxPopUp}></div>
        <div data-element="341" onClick={toggleBoxPopUp}></div>
        <div data-element="342" onClick={toggleBoxPopUp}></div>
        <div data-element="343" onClick={toggleBoxPopUp}></div>
        <div data-element="344" onClick={toggleBoxPopUp}></div>
        <div data-element="345" onClick={toggleBoxPopUp}></div>
        <div data-element="346" onClick={toggleBoxPopUp}></div>
        <div data-element="347" onClick={toggleBoxPopUp}></div>
        <div data-element="348" onClick={toggleBoxPopUp}></div>
        <div data-element="349" onClick={toggleBoxPopUp}></div>
        <div data-element="350" onClick={toggleBoxPopUp}></div>
        <div data-element="351" onClick={toggleBoxPopUp}></div>
        <div data-element="352" onClick={toggleBoxPopUp}></div>
        <div data-element="353" onClick={toggleBoxPopUp}></div>
        <div data-element="354" onClick={toggleBoxPopUp}></div>
        <div data-element="355" onClick={toggleBoxPopUp}></div>
        <div data-element="356" onClick={toggleBoxPopUp}></div>
        <div data-element="357" onClick={toggleBoxPopUp}></div>
        <div data-element="358" onClick={toggleBoxPopUp}></div>
        <div data-element="359" onClick={toggleBoxPopUp}></div>
        <div data-element="360" onClick={toggleBoxPopUp}></div>
        <div data-element="361" onClick={toggleBoxPopUp}></div>
        <div data-element="362" onClick={toggleBoxPopUp}></div>
        <div data-element="363" onClick={toggleBoxPopUp}></div>
        <div data-element="364" onClick={toggleBoxPopUp}></div>
        <div data-element="365" onClick={toggleBoxPopUp}></div>
        <div data-element="366" onClick={toggleBoxPopUp}></div>
        <div data-element="367" onClick={toggleBoxPopUp}></div>
        <div data-element="368" onClick={toggleBoxPopUp}></div>
        <div data-element="369" onClick={toggleBoxPopUp}></div>
        <div data-element="370" onClick={toggleBoxPopUp}></div>
        <div data-element="371" onClick={toggleBoxPopUp}></div>
        <div data-element="372" onClick={toggleBoxPopUp}></div>
        <div data-element="373" onClick={toggleBoxPopUp}></div>
        <div data-element="374" onClick={toggleBoxPopUp}></div>
        <div data-element="375" onClick={toggleBoxPopUp}></div>
        <div data-element="376" onClick={toggleBoxPopUp}></div>
        <div data-element="377" onClick={toggleBoxPopUp}></div>
        <div data-element="378" onClick={toggleBoxPopUp}></div>
        <div data-element="379" onClick={toggleBoxPopUp}></div>
        <div data-element="380" onClick={toggleBoxPopUp}></div>
        <div data-element="381" onClick={toggleBoxPopUp}></div>
        <div data-element="382" onClick={toggleBoxPopUp}></div>
        <div data-element="383" onClick={toggleBoxPopUp}></div>
        <div data-element="384" onClick={toggleBoxPopUp}></div>
        <div data-element="385" onClick={toggleBoxPopUp}></div>
        <div data-element="386" onClick={toggleBoxPopUp}></div>
        <div data-element="387" onClick={toggleBoxPopUp}></div>
        <div data-element="388" onClick={toggleBoxPopUp}></div>
        <div data-element="389" onClick={toggleBoxPopUp}></div>
        <div data-element="390" onClick={toggleBoxPopUp}></div>
        <div data-element="391" onClick={toggleBoxPopUp}></div>
        <div data-element="392" onClick={toggleBoxPopUp}></div>
        <div data-element="393" onClick={toggleBoxPopUp}></div>
        <div data-element="394" onClick={toggleBoxPopUp}></div>
        <div data-element="395" onClick={toggleBoxPopUp}></div>
        <div data-element="396" onClick={toggleBoxPopUp}></div>
        <div data-element="397" onClick={toggleBoxPopUp}></div>
        <div data-element="398" onClick={toggleBoxPopUp}></div>
        <div data-element="399" onClick={toggleBoxPopUp}></div>
        <div data-element="400" onClick={toggleBoxPopUp}></div>
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

      <div className="feedback" style={{ display: "none" }}></div>
      
      <div className="confetti-screen" style={{ display: "none" }}></div>
    </div>
  );
};

export default PlayGame;

