const Main = ({ todoList }) => {
  return (
    <div className="main">
      {
        todoList.map(item => {
          return <div key={item.id}className="main-item">
            <button className="circle-btn"></button>
            <p>{item.text}</p>
          </div>
        })
      }

      {/* <div className="main-item">
        <button></button>
        <p>lorem lorem lorem</p>
      </div>
      <div className="main-item">
        <button></button>
        <p>lorem lorem lorem</p>
    </div> */}
    </div>
  );
}

export default Main;
