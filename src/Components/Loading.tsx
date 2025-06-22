export default function Loading() {
  // Simulate a loading delay for demonstration purposes
  new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <p className="text-zinc-400 text-xl animate-pulse">
        Feladat betöltése folyamatban...
      </p>
    </div>
  );
}
