import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonListHeader,
  IonText,
  IonChip
} from '@ionic/react'
import {
  alertCircleOutline,
  cartOutline,
  checkmarkCircle,
  checkmarkCircleOutline,
  navigateOutline,
  pricetagsOutline
} from 'ionicons/icons'
import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'

const Home: React.FC<RouteComponentProps> = props => {
  const [searchText, setSearchText] = useState('')
  const users = [
    { id: 0, name: 'Fred' },
    { id: 1, name: 'Sabrina' },
    { id: 2, name: 'Vanessa' },
    { id: 3, name: 'Ive' },
    { id: 4, name: 'Martin' },
    { id: 5, name: 'Monika Mila' }
  ]

  const { history } = props

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div style={{ display: 'flex' }}>
              <img src="https://svgur.com/i/Uqo.svg" width="50px" style={{ display: 'inline-block' }} alt="" />
              <h1 style={{ marginLeft: 3 }}>Pear</h1>
            </div>
          </IonTitle>
          <IonAvatar style={{ height: '3rem', width: '3rem', marginRight: 20 }} slot="end">
            <img src="https://i.pinimg.com/originals/f7/2a/d5/f72ad5a9dfc4e526543822c4eed9940d.jpg" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} value="packages">
          <IonSegmentButton value="something">
            <IonIcon icon={pricetagsOutline} />

            <IonLabel>Vendors</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="packages">
            <IonIcon icon={cartOutline} />

            <IonLabel>Packages</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonIcon icon={navigateOutline} />
            <IonLabel>Map</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <div style={{ margin: 16, paddingTop: 16, paddingBottom: 16 }}>
          <IonText color="primary">
            <h1>Hey Sofia!</h1>
          </IonText>
          <h3>Let's deliver something 🚚 📦</h3>
        </div>
        <IonList>
          <IonListHeader>
            <h1>Current deliveries</h1>
          </IonListHeader>
          <IonSearchbar
            value={searchText}
            placeholder="Search packages..."
            onIonChange={e => setSearchText(e.detail.value!)}
          ></IonSearchbar>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://pbs.twimg.com/profile_images/506376104853008384/tZbnSlvk_400x400.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Alza.sk</h2>
              <h3>3km from your home</h3>
              <p>Ready to deliver</p>
            </IonLabel>

            <IonIcon color="success" icon={checkmarkCircleOutline}></IonIcon>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://www.mall.cz/i/16720082/500/500/" />
            </IonAvatar>
            <IonLabel>
              <h2>Mall.sk</h2>
              <h3>1050m from your home</h3>
              <p>Ready to deliver</p>
            </IonLabel>

            <IonIcon color="success" icon={checkmarkCircleOutline}></IonIcon>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://static.highsnobiety.com/thumbor/Dlh0IXpfsroEYkPeg4h9FT0Sjyc=/1600x1067/static.highsnobiety.com/wp-content/uploads/2012/08/06171644/replacement-logos-01.jpg" />
            </IonAvatar>
            <IonLabel>
              <h2>Nike.com</h2>
              <h3>2km from your home</h3>
              <p>Ready to deliver</p>
            </IonLabel>

            <IonIcon color="success" icon={checkmarkCircleOutline}></IonIcon>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="data:image/png;base64,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" />
            </IonAvatar>
            <IonLabel>
              <h2>A3Sport</h2>
              <h3>4km from your home</h3>
              <p>Delivery ready in 7 minutes</p>
            </IonLabel>

            <IonIcon color="warning" icon={alertCircleOutline}></IonIcon>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Home
