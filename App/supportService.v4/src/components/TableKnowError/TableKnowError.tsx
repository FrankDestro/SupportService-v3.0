import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableKnowError.css";
import * as functions from "../../utils/functions";

type TableKnowErrorProps = {
  knowerros: KnowError[];
};

type KnowError = {
  id: number | string;
  title: string;
  rootCause: string;
  solution: string;
  tags: string[];
  status: string;
  createDate: string;
  resolutionDate: string;
  userID: number;
  userEmail: string;
};

const TableKnowError = ({ knowerros }: TableKnowErrorProps) => {
  return (
    <>
      <table className="container-base">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Root Cause</th>
            <th>Solution</th>
            <th>Tags</th>
            <th>Status</th>
            <th>Create Date</th>
            <th>Resolution Date</th>
            <th>userID</th>
            <th>userEmail</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {knowerros.map((knowerrosItem) => (
            <tr key={knowerrosItem.id}>
              <td>{knowerrosItem.id}</td>
              <td className="limited-text">{knowerrosItem.title}</td>
              <td className="limited-text">{knowerrosItem.rootCause}</td>
              <td className="limited-text">{knowerrosItem.solution}</td>

              <td className="limited-text">
                {knowerrosItem.tags.map((tag, index) => (
                  <span key={index} className="tag-td">
                    {tag}
                  </span>
                ))}
              </td>
              <td>
                <span
                  style={functions.getStatusKnowErrorsBadgeStyle(
                    knowerrosItem.status
                  )}
                >
                  {knowerrosItem.status}
                </span>
              </td>
              <td>{knowerrosItem.createDate}</td>
              <td>{knowerrosItem.resolutionDate}</td>
              <td>{knowerrosItem.userID}</td>
              <td>{knowerrosItem.userEmail}</td>
              <td>
                <div className="container-button-details">
                  <FontAwesomeIcon icon={faEdit} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableKnowError;
