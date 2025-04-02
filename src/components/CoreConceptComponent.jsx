import CoreConcept from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";
export default function CoreConceptComponent() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
