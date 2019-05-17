import React from "react";
import moment from "moment";
import {Link} from "react-router-dom"

const CardComponent = ({
  name,
  image,
  id,
  created,
  origin,
  location,
  episode,
  url,
  ...props
}) => (
  <div>
    <div className="uk-card uk-card-default">
      <div className="uk-card-media-top">
        <div className="uk-inline">
          <img src={image} alt={name} />
          <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-padding-small">
            <h3 className="uk-margin-remove">{name}</h3>
            <p className="uk-margin-remove">
              {" "}
              id:{id} - {moment(created).fromNow()}
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body uk-padding-small">
        <table className="uk-table uk-table-divider uk-table-justify uk-table-middle">
          <tbody>
            {Object.keys(props).map((key, index) => (
              <tr key={index}>
                <td>{key}</td>
                <td>{props[key] ? props[key] : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="uk-card-footer uk-text-left">
        <Link to={`/detail/${id}`} className="uk-button uk-button-text">
          Detail
        </Link>
      </div>
    </div>
  </div>
);

export default CardComponent;
