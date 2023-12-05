import {
  IonContent,
  IonDatetime,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Histórico</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <div className="content">
            <IonDatetime
              presentation="date"
              value="2023-01-01"
              highlightedDates={[
                {
                  date: "2023-01-05",
                  textColor: "#00B383",
                  backgroundColor: "#AEFFE9",
                },
                {
                  date: "2023-01-10",
                  textColor: "#E0A800",
                  backgroundColor: "#FFE289",
                },
                {
                  date: "2023-01-20",
                  textColor: "#C65647",
                  backgroundColor: "#FFA99D",
                },
                {
                  date: "2023-01-23",
                  textColor: "#00B383",
                  backgroundColor: "#AEFFE9",
                },
              ]}
            ></IonDatetime>
            
            <div className="room-disponible">
              <div className="time">
                <div className="circle"></div>
                <h3> 10:00 - 13:00 </h3>
              </div>
              <div className="info-calendar-txt">
                <h1> Disponível - Laboratório 1 </h1>
                <h2> Nenhum proprietário. </h2>
              </div>
            </div>

            <div className="room-reserved">
              <div className="time">
                <div className="circle"></div>
                <h3> 10:00 - 13:00 </h3>
              </div>
              <div className="info-calendar-txt">
                <h1> Reserva - Laboratório 1 </h1>
                <h2> Victor B. </h2>
              </div>
            </div>

            <div className="room-ocuped">
              <div className="time">
                <div className="circle"></div>
                <h3> 10:00 - 13:00 </h3>
              </div>
              <div className="info-calendar-txt">
                <h1> Reserva - Laboratório 1 </h1>
                <h2> Victor B. </h2>
              </div>
            </div>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
