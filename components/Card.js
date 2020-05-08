import Photo from "./Photo";

function Card({ item }) {
  console.log(item);
  const { image, telegram_id, stack, username, experience } = item;
  return (
    <>
      <div className="card m-2 mb-3 m-sm-0 mb-sm-3">
        <Photo item={image} />
        <div className="card-body">
          <h3>{username}</h3>
          {stack.split(" ").map((el) => (
            <span className="badge badge-primary mr-2">{el}</span>
          ))}
          <p>{experience}</p>
          <a
            href={`tg://user?id=${telegram_id}`}
            className="btn btn-success btn-sm btn-block"
          >
            Telegram
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
