import { Button } from "@next-app/components/Button";
import { Input } from "@next-app/components/Input";

export default function Home() {
  return (
    <main className="px-5 pt-5">
      <div className="flex w-full flex-col gap-4">
        <Input
          placeholder="https://youtube.com/..."
          labelText="Insira o Link para download"
          name="queryUrl"
        />
        <div className="flex items-center gap-2">
          <Button>Explorer</Button>
          <Button>Analisar Link</Button>
          <Button>Baixar</Button>
        </div>
      </div>
    </main>
  );
}
