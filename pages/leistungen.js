import styled from 'styled-components'

import Page from '../layouts/page'
import Heading from '../components/heading'
import Card from '../components/card'

import {
  LeistungList,
  LeistungListItem,
  LeistungPreis
} from '../components/leistungen.js'

export default () => (
  <Page title="Leistungen / Preise">
    <Card title="Polieren - Defektkorrektur">
      <p>
        Wir entfernen feine Kratzer (Waschanlagenkratzer, Swirls) und
        Hologramme. Je nachdem wie sehr dein Lack zerkratzt ist, muss dies in
        mehreren Durchgängen geschehen.
      </p>
      <p>
        Tiefere Kratzer und Parkschrammen werden von uns durch spezielle
        Trockenschleifsysteme entfernt ohne zuviel Lack abtragen zu müssen.
      </p>
      <p>
        Der erste Durchgang kostet rund 500€ und beinhaltet die Fahrzeugwäsche
        (inkl. Felgen und Einstiege), Lackreinigung mittels Knete und die erste
        Stufe der Defektkorrektur, wo mit einem Durchgang der beste Kompromiss
        aus Kratzerentfernung und Glanzsteigerung gewählt wird.
      </p>
      <p>
        Jeder weitere Durchgang kostet rund 300€, entfernt mehr Kratzer und
        lässt deinen Lack noch mehr glänzen.
      </p>
      <LeistungPreis>ab 500€</LeistungPreis>
    </Card>

    <Card title="Versiegelung - Keramikbeschichtung">
      <p>
        Eine keramische Versiegelung wie das Gtechniq Crystal Serum schützt den
        Lack zuverlässig vor allen Umwelteinflüssen. Als erster in Deutschland
        zertifizierter Aufbereiter von Gtechniq, appliziere ich diese
        Versiegelung fachlich korrekt, damit diese auch mehrere Jahre hält.
      </p>{' '}
      <p>
        Weitere Vorteile: der Dreck wird schlechter haften, das Wasser perlt
        schöner und schneller ab und das Waschen geht einfacher von der Hand. Du
        kannst wählen zwischen:
      </p>
      <LeistungList>
        <LeistungListItem>Gtechniq Crystal Serum (+ Exo)</LeistungListItem>
        <LeistungListItem>Gyeon Duraflex/Pure</LeistungListItem>
        <LeistungListItem>Servfaces Ultima</LeistungListItem>
        <LeistungListItem>Nanolex Si3d HD</LeistungListItem>
        <LeistungListItem>Weitere auf Anfrage</LeistungListItem>
      </LeistungList>
      <p>
        Bevor wir aber deinen Lack mit einer Keramikversiegelung schützen
        können, muss dieser mindestens 1-Stufig poliert werden.
      </p>
      <LeistungPreis>ab 150€</LeistungPreis>
    </Card>

    <Card title="Luxuswachs - Zymöl, Swizöl">
      <p>
        Nicht jeder Lack wird so beansprucht, dass es sich lohnt eine keramische
        Versiegelung zu applizieren. Die Luxuswachse von Zymöl, Swizöl und co.
        sind was für echte Liebhaber, die ihr Fahrzeug hauptsächlich bei schönem
        Wetter bewegen. Die teilweise bis zu 3000€ teuren Wachse werden von uns
        nur auf frisch polierte Lacke aufgetragen um das bestmögliche Ergebnis
        zu erzielen.
      </p>
      <p>
        Du wirst belohnt mit einzigartigem Glanz und einer unvergleichlichen
        Haptik deines Lackes.
      </p>
      <p>Folgende Luxuswachse stehen bei uns zur Auswahl:</p>
      <LeistungList>
        <LeistungListItem>Zymöl Vintage</LeistungListItem>
        <LeistungListItem>Zymöl Concours</LeistungListItem>
        <LeistungListItem>Zymöl Carbon</LeistungListItem>
        <LeistungListItem>Swizöl Best of Show</LeistungListItem>
        <LeistungListItem>Swizöl Blau-Weiß</LeistungListItem>
        <LeistungListItem>Swizöl Shield</LeistungListItem>
        <LeistungListItem>Weitere auf Anfrage</LeistungListItem>
      </LeistungList>
      <LeistungPreis>ab 100€</LeistungPreis>
    </Card>

    <Card title="Gtechniq Crystal Serum Paket">
      <p>
        Sehr lange Standzeit, tolles Wasserablaufverhalten und kreisrunde
        Wasserperlen. Das Gtechniq Crystal Serum Light/Ultra (+Exo) spielt in
        der obersten Liga und hat lange Zeit Maßstäbe für Keramische
        Versiegelung gesetzt. Überzeuge dich selbst und schaue dir ein paar
        Arbeitsbeispiele an:{' '}
        <a
          href="https://glossboss.de/pflegeberichte/porsche-997-grau-crystal-serum-gtechniq/"
          target="_blank"
        >
          Porsche 997 Grau
        </a>
        ,{' '}
        <a
          href="https://glossboss.de/pflegeberichte/crystal-serum-nach-2-jahren/"
          target="_blank"
        >
          Porsche 997 Grau nach 2 Jahren
        </a>
        ,{' '}
        <a
          href="https://glossboss.de/pflegeberichte/video-porsche-996-turbo-gtechniq-crystal-serum-exo/"
          target="_blank"
        >
          Porsche 996 Turbo
        </a>
      </p>

      <LeistungList>
        <LeistungListItem>1-Stufige Defektkorrektur</LeistungListItem>
        <LeistungListItem>
          Lackversiegelung mit Gtechniq Crystal Serum Light/Ultra + Exo
        </LeistungListItem>
        <LeistungListItem>
          Ca. 2-3 Jahre realistische Standzeit
        </LeistungListItem>
      </LeistungList>
      <LeistungPreis>ab 900€</LeistungPreis>
    </Card>

    <Card title="Gyeon Duraflex Paket">
      <p>
        Die längste Standzeit, der beste Schutz und das schönste
        Wasserablaufverhalten. Das Duraflex von Gyeon ist ohne Zweifel die beste
        Versiegelung die es momentan gibt. Der Lack bleibt anders als bei
        anderen keramischen Versiegelungen (wie z.B. Crystal Serum + Exo) schön
        weich
      </p>

      <LeistungList>
        <LeistungListItem>1-Stufige Defektkorrektur</LeistungListItem>
        <LeistungListItem>
          Lackversiegelung mit Gyeon Duraflex (1 Schicht Base + 1 Schicht Flexi)
        </LeistungListItem>
        <LeistungListItem>
          Ca. 2-2,5 Jahre realistische Standzeit (Herstellerangabe: 60 Monate!)
        </LeistungListItem>
      </LeistungList>
      <LeistungPreis>ab 900€</LeistungPreis>
    </Card>

    <Card title="Lederreinigung / Lederreperatur">
      <p>
        Egal ob speckiges Leder oder eingerissene Sitzwange, wir können es
        reparieren. Dein Leder wird wieder geschmeidiger und fühlt sich wieder
        natürlicher an. Die Regelmäßige Lederpflege ist unheimlich wichtig für
        den Werterhalt deines Schmuckstückes.
      </p>
      <p>
        Schaue dir dazu dieses Youtube Video an:{' '}
        <a href="https://youtu.be/-6gDw7lzgp4?t=11m11s" target="_blank">
          Leder nachfärben am Porsche 997 Turbo
        </a>
      </p>
      <LeistungPreis>ab 200€</LeistungPreis>
    </Card>

    <Card title="Felgenversiegelung">
      <p>
        Versiegelte Felgen lassen sich einfacher reinigen und glänzen besser.
        Der heiße Bremsstaub kann sich außerdem nicht so schnell in den Lack der
        Felge einbrennen. Du hast die Wahl zwischen Gtechniq C5 und Gyeon Rim.
        Beide Versiegelungen wurden von uns mehrfach getestet und garantieren
        maximale Standzeit.
      </p>
      <LeistungPreis>ab 100€</LeistungPreis>
    </Card>

    <Card title="Dichtung- und Gummipflege für Oldtimer">
      <p>
        Mit der Zeit schwinden die Weichmacher aus den Dichtungen von deinen
        Oldtimer. Die Folgen sind Wasser bzw. Feuchtigkeitseintritt in den
        Innenraum und harte bzw. spröde Dichtungen.
      </p>
      <p>
        Damit das langfristig nicht mehr passiert, reinigen und pflegen wir
        deine Dichtungen und Gummis, damit diese so lang wie möglich geschmeidig
        bleiben.
      </p>
      <LeistungPreis>ab 30€</LeistungPreis>
    </Card>

    <Card title="Master Paket" highlight={true}>
      <p>
        Begrenzt auf wenige Autos im Jahr ist das Master Paket die absolute
        Endstufe des machbaren. Dein Lack wird in bis zu 5 Durchgängen bis zur
        perfektion Poliert und mit einem Lackschutz deiner Wahl veredelt.{' '}
      </p>
      <p>
        Für weitere Infos kontaktiere uns und wir finden die beste Lösung für
        dein Fahrzeug.
      </p>
      <p>
        Für 2019 nur noch <strong>2 von 4</strong> verfügbar
      </p>
      <LeistungPreis>ab 2500€</LeistungPreis>
    </Card>
  </Page>
)
