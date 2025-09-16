import { PRICES } from "@/content/PriceList";
import { formatPrice } from "@/lib/format";


export function PriceTable() {
  return (
    <div className="space-y-4">
      {PRICES.note ? <p className="text-muted-foreground">{PRICES.note}</p> : null}
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Usługa</th>
              <th className="px-4 py-3 text-left font-medium">Opis</th>
              <th className="px-4 py-3 text-right font-medium">Cena</th>
            </tr>
          </thead>
          <tbody>
            {PRICES.items.map((i) => (
              <tr key={i.name} className="border-t">
                <td className="px-4 py-3 font-medium">{i.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{i.description ?? "—"}</td>
                <td className="px-4 py-3 text-right">{formatPrice(i.price, i.currency ?? "PLN")} {i.unit ?? ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
