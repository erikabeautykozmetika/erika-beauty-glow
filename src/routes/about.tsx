import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Leaf } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Rólunk — ErikaBeautyKozmetika" },
      { name: "description", content: "Ismerd meg az ErikaBeautyKozmetika csapatát és filozófiáját. Több mint 10 éves tapasztalat, minőségi kozmetikumok és vendégközpontú szemlélet." },
      { property: "og:title", content: "Rólunk — ErikaBeautyKozmetika" },
      { property: "og:description", content: "Ismerd meg az ErikaBeautyKozmetika csapatát és filozófiáját." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Award,
    title: "Szakértelem",
    description:
      "Több mint 10 éves tapasztalattal és folyamatos képzésekkel biztosítjuk a legújabb technikák alkalmazását.",
  },
  {
    icon: Users,
    title: "Vendégközpontúság",
    description:
      "Minden kezelést a vendég egyedi igényeihez igazítunk — a te komfortod és elégedettséged a legfontosabb.",
  },
  {
    icon: Leaf,
    title: "Minőségi alapanyagok",
    description:
      "Kizárólag megbízható, prémium kozmetikumokat használunk, amelyek kíméletesek a bőrhöz és hatékonyak.",
  },
];

const team = [
  {
    name: "Erika",
    role: "Kozmetikus, tulajdonos",
    description:
      "A szalon alapítója, aki szenvedélyesen hiszi, hogy a szépségápolás nem luxus, hanem mindennapi öngondoskodás.",
  },
  {
    name: "Anna",
    role: "Sminkes, szempilla-specialista",
    description:
      "Kreatív sminkes, aki a legapróbb részletekre is odafigyel, hogy a végeredmény természetes és egyedi legyen.",
  },
  {
    name: "Petra",
    role: "Manikűrös, pedikűrös",
    description:
      "Precíz és türelmes szakember, aki imádja, hogy egy szép körömmel mosolyt csalhat a vendégek arcára.",
  },
];

function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Rólunk"
          subtitle="ErikaBeautyKozmetika egy barátságos szépségszalon Budapesten, ahol a professzionális kezelések és a személyes figyelem találkoznak."
          centered
          className="mb-12"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-foreground">
            <p>
              Szalonunkat azzal a céllal hoztuk létre, hogy minden vendégünknek nyugodt,
              feltöltő környezetet biztosítsunk, ahol kizárólag önmagára koncentrálhat.
            </p>
            <p>
              Hiszünk abban, hogy a szép bőr és a jó közérzet együtt járnak. Ezért nem
              csak a kezelésekre, hanem a teljes élményre nagy hangsúlyt fektetünk: a
              barátságos fogadtatástól kezdve a személyre szabott tanácsadáson át az
              otthoni rutin kialakításáig.
            </p>
            <p>
              Legyen szó egy gyors manikűrről, egy pihentető masszázsról vagy egy
              komplex arckezelésről — nálunk minden alkalommal különlegesen fogod magad
              érezni.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <value.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{value.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            title="Csapatunk"
            subtitle="Ismerd meg azokat, akikért a szalon igazán emberivé válik."
            centered
            className="mb-12"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-2xl font-semibold text-primary">
                  {member.name[0]}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
