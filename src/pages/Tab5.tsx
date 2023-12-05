import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab5.css";

const Tab5: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 5</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Meu Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <div className="content">
            <div className="img-profile">
              <IonImg src="/assets/synthia.png"> </IonImg>
            </div>
            <div>
              <div className="info-profile-txt">
                <h1> Nome </h1>
                <h2> Synthia Einstein </h2>
              </div>
              <div className="info-profile-txt">
                <h1> RA ou RM </h1>
                <h2> 0000-0 </h2>
              </div>
              <div className="info-profile-txt">
                <h1> Email </h1>
                <h2> Synthia@etec.sp.gov.br </h2>
              </div>
              <div className="info-profile-txt">
                <h1> Cargo </h1>
                <h2> Inspetora </h2>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
