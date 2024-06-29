import './styles.css';
import WorkIcon from "./WorkIcon";
import SchoolIcon from "./SchoolIcon";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Home() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className='container-time-line'>
      <h1 className="title">Andamento</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          const dateContent = (
            <div className="date custom-date">
              {element.date}
            </div>
          );

          return (
            <>
              <VerticalTimelineElement
                key={element.id}
                date={dateContent}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <div className='container-content'>
                  <div className='container-content-historic'>
                    <div className="photo">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></img>
                    </div>
                    <div>
                      <h3 className="vertical-timeline-element-title">
                        {element.title}
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                      </h5>
                    </div>
                  </div>
                  <div>
                    <p id="description">{element.description}</p>
                  </div>
                </div>
              </VerticalTimelineElement>
            </>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Home;