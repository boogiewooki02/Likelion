import './Item.css'

function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt="image"></img>
      <div className='margin-left'>
        <div className='item-title'>{props.title}</div>
        <div className='item-description'>{props.description}</div>
        <div className='item-pay'>{props.pay}</div>
      </div>
    </div>
  );
}

export default Item;
