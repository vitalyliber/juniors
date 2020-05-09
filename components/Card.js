import moment from 'moment';

import Photo from "./Photo";

function Card({ item }) {
  console.log(item);
  const { image, telegram_username, stack, username, experience, updated_at, github_url } = item;
  return (
    <>
      <div className="card m-2 mb-3 m-sm-0 mb-sm-3">
        <Photo item={image} />
        <div className="card-body">
          <h3>{username}</h3>
          {stack
            .replace(/,/g, "")
            .split(" ")
            .map((el) => (
              <span className="badge badge-primary mr-2">{el}</span>
            ))}
          <p className="mt-2">{experience}</p>
          <small>
            <p className="text-muted">{moment(updated_at).fromNow()}</p>
          </small>
          <a
            href={`tg://resolve?domain=${telegram_username}`}
            className="btn btn-success btn-sm btn-block"
          >
            Telegram
          </a>
          {github_url && github_url.length > 0 && (
            <a
              href={github_url}
              target="_blank"
              className="btn btn-outline-dark btn-sm btn-block"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
