import styles from './Section.module.scss'
import Collapse from '../../../collapse/Collapse'

export default function Section() {
  return (
    <section className={styles.section}>
      <Collapse title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes au logement, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </Collapse>
      <Collapse title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </Collapse>
      <Collapse title="Service">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </Collapse>
      <Collapse title="Sécurité">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond au critères de sécurité
        établis par nos service. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestiques pour nos hôtes.
      </Collapse>
    </section>
  )
}
