import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarCheck, Info, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/SectionHeading";
import { site, services } from "@/lib/site-data";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/foglalas")({
  head: () => ({
    meta: pageMeta({
      title: "Időpontfoglalás online | Erika Beauty Kozmetika",
      description:
        "Foglalj időpontot arckezelésre online, néhány kattintással. Válaszd ki a szolgáltatást, a napot és az időpontot — hamarosan visszaigazolom.",
      path: "/foglalas",
    }),
    links: [{ rel: "canonical", href: "/foglalas" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Kezdőlap", url: "/" },
            { name: "Időpontfoglalás", url: "/foglalas" },
          ]),
        ),
      },
    ],
  }),
  component: BookingPage,
});

const bookingSchema = z.object({
  name: z.string().min(2, "Kérlek, add meg a neved"),
  email: z.string().email("Érvényes e-mail címet adj meg"),
  phone: z.string().min(6, "Érvényes telefonszámot adj meg"),
  service: z.string().min(1, "Válassz szolgáltatást"),
  date: z.string().min(1, "Válassz dátumot"),
  time: z.string().min(1, "Válassz időpontot"),
  message: z.string().max(1000).optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

function BookingPage() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { service: "" },
  });

  const onSubmit = async (_values: BookingValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast.success(
      "Köszönöm! A foglalási kérésedet megkaptam, hamarosan visszajelzek a pontos időponttal.",
    );
    reset({ service: "" });
  };

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          className="mb-12"
          title="Időpontfoglalás"
          subtitle="Töltsd ki az űrlapot, és a lehető leghamarabb visszaigazolom a pontos időpontot."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-foreground">
                <Info className="h-5 w-5 text-primary" aria-hidden="true" />
                Az időpontfoglalás szabályai
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  Ha kérdésed van bármely szolgáltatásommal kapcsolatban, kérlek,
                  küldj üzenetet, és a lehető leghamarabb visszajelzek.
                </li>
                <li>
                  <strong className="text-foreground">Lemondás:</strong> 24 órán
                  belüli lemondás esetén (betegség és rendkívüli ok kivételével) a
                  kieső idő miatt a lefoglalt szolgáltatás 50%-a fizetendő
                  átutalással.
                </li>
                <li>
                  Visszatérő vendég esetén a lemondási díj a következő igénybe vett
                  szolgáltatás árához adódik hozzá. Köszönöm a megértésed!
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-secondary p-6">
              <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-foreground">
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                Inkább telefonon egyeztetnél?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Hívj bátran a {site.phoneDisplay} számon. Ha nem érsz el, hagyj
                üzenetet és visszahívlak.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <a href={`tel:${site.phone}`}>Hívás indítása</a>
              </Button>
            </section>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-foreground">
              <CalendarCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              Foglalási űrlap
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Név</Label>
                <Input id="name" placeholder="Kiss Anna" {...register("name")} />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="anna@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefonszám</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+36 30 123 4567"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Szolgáltatás</Label>
                <Select
                  onValueChange={(value) =>
                    setValue("service", value, { shouldValidate: true })
                  }
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Válassz szolgáltatást" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.slug} value={service.name}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-xs text-destructive">{errors.service.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Kívánt dátum</Label>
                <Input id="date" type="date" {...register("date")} />
                {errors.date && (
                  <p className="text-xs text-destructive">{errors.date.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Kívánt időpont</Label>
                <Select
                  onValueChange={(value) =>
                    setValue("time", value, { shouldValidate: true })
                  }
                >
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Válassz időpontot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && (
                  <p className="text-xs text-destructive">{errors.time.message}</p>
                )}
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Megjegyzés (opcionális)</Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Bőrproblémák, allergia, korábbi kezelések…"
                {...register("message")}
              />
            </div>

            <Button type="submit" className="mt-6 w-full" disabled={isSubmitting}>
              {isSubmitting ? "Küldés…" : "Foglalási kérés elküldése"}
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              A foglalás elküldése után telefonon vagy e-mailben visszaigazolom a
              pontos időpontot.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
