import styles from './Section.module.scss'
import Collapse from '../../../collapse/Collapse'

export default function Section() {
  return (
    <section className={styles.section}>
      <Collapse title="Fiabilité">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        placeat.
      </Collapse>
      <Collapse title="Respect">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, odit
        dolore. Unde.
      </Collapse>
      <Collapse title="Service">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        consequuntur facilis, non perferendis libero eius in sequi odit. Alias
        facilis autem asperiores
      </Collapse>
      <Collapse title="Sécurité">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus
        ipsa culpa repellat deleniti consequatur quibusdam aspernatur sit
        tenetur eveniet?
      </Collapse>
    </section>
  )
}
