import DataDisplay from '../components/DataDisplay';
import SectionTitle from '@/components/SectionTitle';
import SectionDescription from '@/components/SectionDescription';
import ContentCard from '@/components/contentCard/ContentCard';
import ContentCardSection from '@/components/contentCard/ContentCardSection';
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import SplitSection from '@/components/SplitSection';
import DealCard from '@/components/dealCard/DealCard';

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-between p-standard">
      <div className="w-full gap-48 flex flex-col items-center">

        <SplitSection
          left={(
            <div>
              <SectionTitle className="mb-2 text-4xl !text-left" title="Fra konsept til kode, vi gir dine ideer liv"/>
              <SectionDescription className="!text-left !mb-0" text="Vi er med deg på reisen fra første idé til ferdig produkt, og styrker din digital innovasjon og forretningsutvikling." />
            </div>
          )}
          leftWidth="60%"
          right={(
            <img src="illustration-0.svg" />
          )}
          rightWidth="40%"
          containerStyle="items-center"
        />

        <div>
          <SectionTitle title="Våre resultater i tall"/>
          <DataDisplay 
            dataSets={[
              {
                number: '100',
                suffix: '%',
                label: 'Kundetilfredshet'
              },
              {
                number: '120',
                suffix: 'K+',
                label: 'Nedlastinger'
              },
              {
                number: '10',
                suffix: 'K+',
                label: 'Registrerte brukere'
              },
              {
                number: '24',
                suffix: '/7',
                label: 'Oppetid'
              },
          ]}
          />
        </div>

        <div className="flex flex-col">
          <SectionTitle className="mb-2" title="Hvorfor velge oss?"/>
          <SectionDescription text="Med vår dype tekniske innsikt og lidenskap for innovasjon, er vi dedikert til å forme din digitale fremtid og styrke din forretningsvekst." />
          <ContentCardSection>
            <ContentCard
              icon="visibility"
              title="Økt Synlighet" 
              text="Med en profesjonell nettside eller app, vil din bedrift bli mer synlig online, tiltrekke seg flere kunder og styrke merkevaren."
            />
            <ContentCard
              icon="campaign"
              title="Kostnadseffektiv Markedsføring" 
              text="En godt designet nettside eller app er en av de mest kostnadseffektive markedsføringsverktøyene, som gir høy avkastning på investeringen."
            />
            <ContentCard
              icon="event_available"
              title="Tilgjengelig 24/7" 
              text="Din nettside eller app er alltid tilgjengelig, slik at kundene kan nå deg når som helst, dag eller natt."
            />
            <ContentCard
              icon="query_stats"
              title="Skalerbar Vekst" 
              text="Våre løsninger er bygget med tanke på fremtiden, slik at du enkelt kan skalere opp eller tilpasse etter hvert som din bedrift vokser."
            />
            <ContentCard
              icon="sentiment_very_satisfied"
              title="Forbedret Kundetilfredshet" 
              text="Med en intuitiv og brukervennlig plattform, vil kundene dine ha en positiv interaksjon med merkevaren din, noe som fører til økt lojalitet."
            />
            <ContentCard
              icon="workspace_premium"
              title="Konkurransedyktig Fordel" 
              text="Stå ut i markedet med en unik nettpresens som setter deg foran konkurrentene."
            />
          </ContentCardSection>
        </div>

        <SplitSection
          left={(
            <div>
              <SectionTitle className="mb-6 !text-left" title="Et brukervennlig grensesnitt og en flott kombinasjon av form og funksjon som har styrket merkevaren vår."/>
              <SectionDescription className="font-bold !text-left !mb-2" text="Asgeir Albretsen," />
              <SectionDescription className="!text-left !mb-0" text="Daglig Leder i Iago" />
            </div>
          )}
          leftWidth="70%"
          right={(
            <div>
              <SectionDescription className="!text-left !mb-0" text="Vår tilnærming til nettsideutvikling består av tre kjerneelementer: design, funksjonalitet og brukeropplevelse." />
            </div>
          )}
          rightWidth="30%"
        />

        <Accordion selectionMode="multiple" itemClasses={{
          heading: "bg-slate-800, flex",
          content: "text-font-color text-base font-regular mb-8 ml-[5.75rem]", //5 rem is same as start content flex basis, plus 0.75rem, same as inherent gap in title element
          title: "text-font-color text-2xl font-bold grow",
          startContent: "basis-20 justify-start flex"
        }}>
          <AccordionItem
            key="1"
            aria-label="Hvorfor er Iago det beste valget for web- og apputvikling?"
            title="Hvorfor er Iago det beste valget for web- og apputvikling?"
            startContent={
              <p className="text-font-color font-semibold text-3xl">01</p>
            }
          >
            Med vår dype tekniske kunnskap og forståelse for moderne trender, leverer Iago løsninger som ikke bare møter, men overgår kundens forventninger. Vårt team er dedikert til kontinuerlig læring og innovasjon.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Hvordan skiller Iago seg fra andre IT-konsulentfirmaer?"
            title="Hvordan skiller Iago seg fra andre IT-konsulentfirmaer?"
            startContent={
              <p className="text-font-color font-semibold text-3xl">02</p>
            }
          >
            Empty
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Hvordan kan Iago hjelpe min bedrift med å vokse digitalt?"
            title="Hvordan kan Iago hjelpe min bedrift med å vokse digitalt?"
            startContent={
              <p className="text-font-color font-semibold text-3xl">03</p>
            }
          >
            Empty
          </AccordionItem>
        </Accordion>

        <div className="flex flex-row gap-12">
          <DealCard 
            icon="template"
            price="8000 NOK"
            title="Malbasert"
            description="Enkel og effektiv nettløsning basert på profesjonelle maler."
            bulletPoints={[
              "Rask Oppsett",
              "Mobiloptimalisert Desgin",
              "Søkemotorvennlig",
              "Integrert Innholdsstyring"
            ]}
          />
          <DealCard
            icon="tailored"
            price="13000 NOK"
            title="Skreddersydd"
            cardType="premium"
            description="Unik nettløsning designet spesifikt for din bedrifts behov."
            bulletPoints={[
              "Tilpasset Webdesign",
              "Avansert Funksjonalitet",
              "Responsivt design",
              "SEO-Optimalisert Struktur",
              "Integrerte Analyseverktøy",
              "Ubegrenset Sideskapelse",
              "Flerspråklig Støtte",
              "Dedikert Support & Vedlikehold"
            ]}
            columns="columns-2"
          />
        </div>
      </div>
    </main>
  )
}