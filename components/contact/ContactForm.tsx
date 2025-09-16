"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SITE } from "@/content/Site";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import Link from "next/link";


export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tag, setTag] = useState("");
  const [terms, setTerms] = useState(false);

  return (
    <form className="space-y-3" action="/api/contact" method="POST" onSubmit={(e) => e.preventDefault()}>
      <Input placeholder="Name or nickname" value={name} onChange={(e) => setName(e.target.value)} required />
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Textarea placeholder="Describe the project, deadline and application" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <Input placeholder="Telegram or Discord tag" value={tag} onChange={(e) => setTag(e.target.value)} />
      <div className="flex items-center justify-end gap-2">
        <Checkbox id="terms" checked={terms} onCheckedChange={(checked) => setTerms(checked === "indeterminate" ? false : checked)} />
        <Label htmlFor="terms">I agree to the terms and conditions</Label>
      </div>
      <div className="flex gap-3">
        <Button type="submit" disabled title="Stub — dopisz obsługę w /api/contact">Submit</Button>
      </div>
    </form>
  );
}
