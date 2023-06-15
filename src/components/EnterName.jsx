const EnterName = () => {
  return (
    <div className="EnterName">
      <div className="nameInputBox">
        <div>
          <span>Your Name: </span>
          <input type="text" autoFocus />
        </div>
        <div>
          <span>Your Time: </span>
          <span>5min 13sec</span>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default EnterName;

