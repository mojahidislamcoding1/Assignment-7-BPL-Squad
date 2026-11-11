import Players from "../Players/Players";

const Available = ({handleChossePlayer}) => {
  return (
    <div>
  
       <Players handleChossePlayer = {handleChossePlayer}></Players>
    </div>
  );
};

export default Available;