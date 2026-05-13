export default function TransferFormUI() {
  return (
    <div className="min-h-screen bg-zinc-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-zinc-200">
        <div className="flex items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-blue-700">
              Generador de Traspasos
            </h1>

            <p className="text-zinc-500 mt-2 text-lg">
              Captura productos, sucursales y autorización.
            </p>
          </div>

          <div className="w-24 h-24 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-400 font-bold border border-zinc-200">
            LOGO
          </div>
        </div>

        {/* Sucursales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Sucursal origen
            </label>

            <input
              type="text"
              placeholder="Ej. 123 - Centro"
              className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Sucursal destino
            </label>

            <input
              type="text"
              placeholder="Ej. 456 - Norte"
              className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Autorización */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Autorizó
            </label>

            <input
              type="text"
              placeholder="Nombre del encargado"
              className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Fecha
            </label>

            <input
              type="date"
              className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Agregar producto */}
        <div className="bg-zinc-50 rounded-3xl border border-zinc-200 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Agregar producto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Código"
              className="rounded-2xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              placeholder="Cantidad"
              className="rounded-2xl border border-zinc-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all px-4 py-3"
            >
              Añadir producto
            </button>
          </div>
        </div>

        {/* Tabla */}
        <div className="overflow-hidden rounded-3xl border border-zinc-200 mb-8">
          <table className="w-full border-collapse">
            <thead className="bg-zinc-100">
              <tr>
                <th className="text-left p-4 font-bold">
                  Código
                </th>

                <th className="text-left p-4 font-bold">
                  Descripción
                </th>

                <th className="text-left p-4 font-bold">
                  Cantidad
                </th>

                <th className="text-left p-4 font-bold w-32">
                  Acción
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  id: '750100',
                  name: 'Paracetamol 500mg',
                  amount: 3
                },
                {
                  id: '880200',
                  name: 'Ibuprofeno',
                  amount: 1
                }
              ].map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-zinc-200"
                >
                  <td className="p-4 font-mono">
                    {product.id}
                  </td>

                  <td className="p-4">
                    {product.name}
                  </td>

                  <td className="p-4">
                    {product.amount}
                  </td>

                  <td className="p-4">
                    <button
                      className="rounded-xl bg-red-500 hover:bg-red-600 text-white px-4 py-2 font-semibold transition-all"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Acciones */}
        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <button
            className="rounded-2xl border border-zinc-300 px-6 py-3 font-bold hover:bg-zinc-100 transition-all"
          >
            Vista previa
          </button>

          <button
            className="rounded-2xl bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-bold transition-all"
          >
            Generar PDF
          </button>
        </div>
      </div>
    </div>
  )
}
