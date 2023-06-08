import inTown from '../images/puzzles/in-town.jpg';
import waldo from '../images/characters/waldo.png';
import wizard from '../images/characters/wizard.png';
import wilma from '../images/characters/wilma.png';
import odlaw from '../images/characters/odlaw.png';
const ContinueGame = ({ illustrationPlaying }) => {

  const boxPopUp = (e) => {
    e.target.classList.add('pop-up');
    if (e.clientX < window.innerWidth / 2) {
      console.log('dropdown should display on right');
    } else {
      console.log('dropdown should display on left');
    }
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
      <div data-element="401" onClick={boxPopUp}></div>
      <div data-element="402" onClick={boxPopUp}></div>
      <div data-element="403" onClick={boxPopUp}></div>
      <div data-element="404" onClick={boxPopUp}></div>
      <div data-element="405" onClick={boxPopUp}></div>
      <div data-element="406" onClick={boxPopUp}></div>
      <div data-element="407" onClick={boxPopUp}></div>
      <div data-element="408" onClick={boxPopUp}></div>
      <div data-element="409" onClick={boxPopUp}></div>
      <div data-element="410" onClick={boxPopUp}></div>
      <div data-element="411" onClick={boxPopUp}></div>
      <div data-element="412" onClick={boxPopUp}></div>
      <div data-element="413" onClick={boxPopUp}></div>
      <div data-element="414" onClick={boxPopUp}></div>
      <div data-element="415" onClick={boxPopUp}></div>
      <div data-element="416" onClick={boxPopUp}></div>
      <div data-element="417" onClick={boxPopUp}></div>
      <div data-element="418" onClick={boxPopUp}></div>
      <div data-element="419" onClick={boxPopUp}></div>
      <div data-element="420" onClick={boxPopUp}></div>
      <div data-element="421" onClick={boxPopUp}></div>
      <div data-element="422" onClick={boxPopUp}></div>
      <div data-element="423" onClick={boxPopUp}></div>
      <div data-element="424" onClick={boxPopUp}></div>
      <div data-element="425" onClick={boxPopUp}></div>
      <div data-element="426" onClick={boxPopUp}></div>
      <div data-element="427" onClick={boxPopUp}></div>
      <div data-element="428" onClick={boxPopUp}></div>
      <div data-element="429" onClick={boxPopUp}></div>
      <div data-element="430" onClick={boxPopUp}></div>
      <div data-element="431" onClick={boxPopUp}></div>
      <div data-element="432" onClick={boxPopUp}></div>
      <div data-element="433" onClick={boxPopUp}></div>
      <div data-element="434" onClick={boxPopUp}></div>
      <div data-element="435" onClick={boxPopUp}></div>
      <div data-element="436" onClick={boxPopUp}></div>
      <div data-element="437" onClick={boxPopUp}></div>
      <div data-element="438" onClick={boxPopUp}></div>
      <div data-element="439" onClick={boxPopUp}></div>
      <div data-element="440" onClick={boxPopUp}></div>
      <div data-element="441" onClick={boxPopUp}></div>
      <div data-element="442" onClick={boxPopUp}></div>
      <div data-element="443" onClick={boxPopUp}></div>
      <div data-element="444" onClick={boxPopUp}></div>
      <div data-element="445" onClick={boxPopUp}></div>
      <div data-element="446" onClick={boxPopUp}></div>
      <div data-element="447" onClick={boxPopUp}></div>
      <div data-element="448" onClick={boxPopUp}></div>
      <div data-element="449" onClick={boxPopUp}></div>
      <div data-element="450" onClick={boxPopUp}></div>
      <div data-element="451" onClick={boxPopUp}></div>
      <div data-element="452" onClick={boxPopUp}></div>
      <div data-element="453" onClick={boxPopUp}></div>
      <div data-element="454" onClick={boxPopUp}></div>
      <div data-element="455" onClick={boxPopUp}></div>
      <div data-element="456" onClick={boxPopUp}></div>
      <div data-element="457" onClick={boxPopUp}></div>
      <div data-element="458" onClick={boxPopUp}></div>
      <div data-element="459" onClick={boxPopUp}></div>
      <div data-element="460" onClick={boxPopUp}></div>
      <div data-element="461" onClick={boxPopUp}></div>
      <div data-element="462" onClick={boxPopUp}></div>
      <div data-element="463" onClick={boxPopUp}></div>
      <div data-element="464" onClick={boxPopUp}></div>
      <div data-element="465" onClick={boxPopUp}></div>
      <div data-element="466" onClick={boxPopUp}></div>
      <div data-element="467" onClick={boxPopUp}></div>
      <div data-element="468" onClick={boxPopUp}></div>
      <div data-element="469" onClick={boxPopUp}></div>
      <div data-element="470" onClick={boxPopUp}></div>
      <div data-element="471" onClick={boxPopUp}></div>
      <div data-element="472" onClick={boxPopUp}></div>
      <div data-element="473" onClick={boxPopUp}></div>
      <div data-element="474" onClick={boxPopUp}></div>
      <div data-element="475" onClick={boxPopUp}></div>
      <div data-element="476" onClick={boxPopUp}></div>
      <div data-element="477" onClick={boxPopUp}></div>
      <div data-element="478" onClick={boxPopUp}></div>
      <div data-element="479" onClick={boxPopUp}></div>
      <div data-element="480" onClick={boxPopUp}></div>
      <div data-element="481" onClick={boxPopUp}></div>
      <div data-element="482" onClick={boxPopUp}></div>
      <div data-element="483" onClick={boxPopUp}></div>
      <div data-element="484" onClick={boxPopUp}></div>
      <div data-element="485" onClick={boxPopUp}></div>
      <div data-element="486" onClick={boxPopUp}></div>
      <div data-element="487" onClick={boxPopUp}></div>
      <div data-element="488" onClick={boxPopUp}></div>
      <div data-element="489" onClick={boxPopUp}></div>
      <div data-element="490" onClick={boxPopUp}></div>
      <div data-element="491" onClick={boxPopUp}></div>
      <div data-element="492" onClick={boxPopUp}></div>
      <div data-element="493" onClick={boxPopUp}></div>
      <div data-element="494" onClick={boxPopUp}></div>
      <div data-element="495" onClick={boxPopUp}></div>
      <div data-element="496" onClick={boxPopUp}></div>
      <div data-element="497" onClick={boxPopUp}></div>
      <div data-element="498" onClick={boxPopUp}></div>
      <div data-element="499" onClick={boxPopUp}></div>
      <div data-element="500" onClick={boxPopUp}></div>
      <div data-element="501" onClick={boxPopUp}></div>
      <div data-element="502" onClick={boxPopUp}></div>
      <div data-element="503" onClick={boxPopUp}></div>
      <div data-element="504" onClick={boxPopUp}></div>
      <div data-element="505" onClick={boxPopUp}></div>
      <div data-element="506" onClick={boxPopUp}></div>
      <div data-element="507" onClick={boxPopUp}></div>
      <div data-element="508" onClick={boxPopUp}></div>
      <div data-element="509" onClick={boxPopUp}></div>
      <div data-element="510" onClick={boxPopUp}></div>
      <div data-element="511" onClick={boxPopUp}></div>
      <div data-element="512" onClick={boxPopUp}></div>
      <div data-element="513" onClick={boxPopUp}></div>
      <div data-element="514" onClick={boxPopUp}></div>
      <div data-element="515" onClick={boxPopUp}></div>
      <div data-element="516" onClick={boxPopUp}></div>
      <div data-element="517" onClick={boxPopUp}></div>
      <div data-element="518" onClick={boxPopUp}></div>
      <div data-element="519" onClick={boxPopUp}></div>
      <div data-element="520" onClick={boxPopUp}></div>
      <div data-element="521" onClick={boxPopUp}></div>
      <div data-element="522" onClick={boxPopUp}></div>
      <div data-element="523" onClick={boxPopUp}></div>
      <div data-element="524" onClick={boxPopUp}></div>
      <div data-element="525" onClick={boxPopUp}></div>
      <div data-element="526" onClick={boxPopUp}></div>
      <div data-element="527" onClick={boxPopUp}></div>
      <div data-element="528" onClick={boxPopUp}></div>
      <div data-element="529" onClick={boxPopUp}></div>
      <div data-element="530" onClick={boxPopUp}></div>
      <div data-element="531" onClick={boxPopUp}></div>
      <div data-element="532" onClick={boxPopUp}></div>
      <div data-element="533" onClick={boxPopUp}></div>
      <div data-element="534" onClick={boxPopUp}></div>
      <div data-element="535" onClick={boxPopUp}></div>
      <div data-element="536" onClick={boxPopUp}></div>
      <div data-element="537" onClick={boxPopUp}></div>
      <div data-element="538" onClick={boxPopUp}></div>
      <div data-element="539" onClick={boxPopUp}></div>
      <div data-element="540" onClick={boxPopUp}></div>
      <div data-element="541" onClick={boxPopUp}></div>
      <div data-element="542" onClick={boxPopUp}></div>
      <div data-element="543" onClick={boxPopUp}></div>
      <div data-element="544" onClick={boxPopUp}></div>
      <div data-element="545" onClick={boxPopUp}></div>
      <div data-element="546" onClick={boxPopUp}></div>
      <div data-element="547" onClick={boxPopUp}></div>
      <div data-element="548" onClick={boxPopUp}></div>
      <div data-element="549" onClick={boxPopUp}></div>
      <div data-element="550" onClick={boxPopUp}></div>
      <div data-element="551" onClick={boxPopUp}></div>
      <div data-element="552" onClick={boxPopUp}></div>
      <div data-element="553" onClick={boxPopUp}></div>
      <div data-element="554" onClick={boxPopUp}></div>
      <div data-element="555" onClick={boxPopUp}></div>
      <div data-element="556" onClick={boxPopUp}></div>
      <div data-element="557" onClick={boxPopUp}></div>
      <div data-element="558" onClick={boxPopUp}></div>
      <div data-element="559" onClick={boxPopUp}></div>
      <div data-element="560" onClick={boxPopUp}></div>
      <div data-element="561" onClick={boxPopUp}></div>
      <div data-element="562" onClick={boxPopUp}></div>
      <div data-element="563" onClick={boxPopUp}></div>
      <div data-element="564" onClick={boxPopUp}></div>
      <div data-element="565" onClick={boxPopUp}></div>
      <div data-element="566" onClick={boxPopUp}></div>
      <div data-element="567" onClick={boxPopUp}></div>
      <div data-element="568" onClick={boxPopUp}></div>
      <div data-element="569" onClick={boxPopUp}></div>
      <div data-element="570" onClick={boxPopUp}></div>
      <div data-element="571" onClick={boxPopUp}></div>
      <div data-element="572" onClick={boxPopUp}></div>
      <div data-element="573" onClick={boxPopUp}></div>
      <div data-element="574" onClick={boxPopUp}></div>
      <div data-element="575" onClick={boxPopUp}></div>
      <div data-element="576" onClick={boxPopUp}></div>
    </div>
    <div className="character-dialog-box">
      <div className="who-is-it-question">Who is it?</div>
      <div className="character-cards">
        <div>
          <div 
            style={{ backgroundImage: `url(${waldo})` }}
            className="character-pic"
          >
          </div>
          <div className="character-name">Waldo</div>
        </div>
        <hr />
        <div>
          <div 
          style={{ backgroundImage: `url(${wizard})` }}
          className="character-pic"
          >
          </div>
          <div className="character-name">Wizard</div>
        </div>
        <hr />
        <div>
          <div 
            style={{ backgroundImage: `url(${wilma})` }}
            className="character-pic"
          >
          </div>
          <div className="character-name">Wilma</div>
        </div>
        <hr />
        <div>
          <div 
            style={{ backgroundImage: `url(${odlaw})` }}
            className="character-pic"
          >
          </div>
          <div className="character-name">Odlaw</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContinueGame;

