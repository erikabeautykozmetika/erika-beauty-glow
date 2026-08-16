import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

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

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Időpontfoglalás — ErikaBeautyKozmetika" },
      { name: "description", content: "Foglalj időpontot az ErikaBeautyKozmetika szalonba online. Arckezelés, manikűr, smink, masszázs — Budapest." },
      { property: "og:title", content: "Időpontfoglalás — ErikaBeautyKozmetika" },
      { property: "og:description", content: "Foglalj időpontot az ErikaBeautyKozmetika szalonba online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const bookingSchema = z.object({
  name: z.string().min(2, "Kérjük, add meg a neved"),
  email: z.string().email("Érvényes e-mail címet adj meg"),
  phone: z.string().min(6, "Érvényes telefonszámot adj meg"),
  service: z.string().min(1, "Válassz szolgáltatást"),
  date: z.string().min(1, "Válassz dátumot"),
  time: z.string().min(1, "Válassz időpontot"),
  message: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const services = [
  "Klasszikus arckezelés",
  "Hidratáló kezelés",
  "Tisztító kezelés",
  "Anti-aging arckezelés",
  "Klasszikus manikűr",
  "Géllakkozás",
  "Pedikűr",
  "Japán manikűr",
  "Nappali smink",
  "Alkalmi smink",
  "Szempilla lifting",
  "Szemöldök laminálás",
  "Arcmasszázs",
  "Relaxáló hátmasszázs",
  "Teljes testmasszázs",
  "Aromaterápiás masszázs",
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
];

function ContactPage() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (_data: BookingForm) => {
    // Simulate submission; replace with real backend/email integration when needed.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Foglalási kérésed elküldtük! Hamarosan felvesszük veled a kapcsolatot.");
    reset();
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Időpontfoglalás"
          subtitle="Töltsd ki az alábbi űrlapot, és mi hamarosan visszajelzünk a pontos időponttal."
          centered
          className="mb-12"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Elérhetőségeink</h2>
              <p className="mt-2 text-muted-foreground">
                Kérdésed van? Hívj, írj, vagy töltsd ki a foglalási űrlapot.
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Cím</p>
                  <p className="text-muted-foreground">1234 Budapest, Példa utca 12.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefon</p>
                  <p className="text-muted-foreground">+36 30 123 4567</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <p className="text-muted-foreground">info@erikabeauty.hu</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex rounded-xl bg-secondary p-2.5 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Nyitvatartás</p>
                  <p className="text-muted-foreground">
                    Hétfő–Péntek: 9:00 – 18:00
                    <br />
                    Szombat: 9:00 – 14:00
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Booking form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Név</Label>
                <Input id="name" placeholder="Kiss Erika" {...register("name")} />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="erika@example.com"
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
                <Select onValueChange={(value) => setValue("service", value)}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Válassz szolgáltatást" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
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
                <Select onValueChange={(value) => setValue("time", value)}>
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
                placeholder="Van valami, amit szeretnél jelezni a foglalással kapcsolatban?"
                {...register("message")}
              />
            </div>

            <Button type="submit" className="mt-6 w-full" disabled={isSubmitting}>
              {isSubmitting ? "Küldés..." : "Időpontfoglalás elküldése"}
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              A foglalás elküldésével kérésed beérkezik hozzánk, és telefonon vagy e-mailben
              visszaigazoljuk a pontos időpontot.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
