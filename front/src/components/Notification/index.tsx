import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

import "./styles.css";

const notificationsData = [
  {
    title: "Nova mensagem recebida",
    time: "10:30 AM",
    date: "03/02/2024",
    sender: "John Doe",
    icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    title: "Atualização importante",
    time: "11:45 AM",
    date: "03/02/2024",
    sender: "Jane Smith",
    icon: "https://i.pravatar.cc/150?img=1",
  },
  {
    title: "Novo evento agendado",
    time: "02:15 PM",
    date: "03/02/2024",
    sender: "Alice Johnson",
    icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function Notifications() {
  return (
    <>

    <div className="relative inline-flex w-fit my-0 my-0 mr-[-20px]">

    <Menu as="div" className="relative inline-block text-left">
        <div className="ter">
          <Menu.Button className="tier">
            <div className="relative">
            <BellIcon className="h-8 w-10 text-blue-500" aria-hidden="true" />
              <span className="badge">3</span>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-auto max-w-md origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-black-900 shadow-md">
            <div className="container-notification">
              <div className="title-notification">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="ml-3 text-blue-500 w-5 h-5"
                />
                <h3>Notificações</h3>
                <div> 
                <h3>Marcar todas como lidas</h3>
                </div>
              </div>

              {notificationsData.map((notification, index) => (
                <div className="notification-summary" key={index}>
                  <div className="notification-text">
                    <h3>{notification.title}</h3>
                    <p>
                      Enviado por:
                      <strong style={{ color: "blue", marginLeft: "5px" }}>
                        {notification.sender}
                      </strong>
                    </p>
                    <p style={{ color: "gray" }}>
                      Horário: {notification.time}
                    </p>
                    <p style={{ color: "gray" }}>Data: {notification.date}</p>
                  </div>
                  <div className="notification-icon">
                    <img
                      src={notification.icon}
                      alt="Icon"
                      className="w-60 h-50 rounded-full"
                    />
                  </div>
                </div>
              ))}
              <div className="ver-todas-notificacoes">
                <FontAwesomeIcon
                  icon={faEye}
                  className="ml-3 text-blue-500 w-5 h-5 mt-2.5"
                />
                <p>Ver todas as notificações</p>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>




    </div>

    </>
  );
}

export default Notifications;
