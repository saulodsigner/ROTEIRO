import React from 'react';
import { Clapperboard, Clock, Video, Lightbulb, UserCheck, Eye, Smartphone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans p-0 md:p-8 flex items-start justify-center">

      {/* Main Document (A4 Proportions for Print, Responsive for Screen) */}
      <div 
        id="printable-script" 
        className="w-full max-w-[1024px] bg-slate-50 flex flex-col overflow-hidden md:border-8 md:border-slate-900 shadow-xl md:shadow-2xl relative"
      >
        {/* HEADER SECTION */}
        <header className="bg-slate-900 text-white p-5 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center justify-start gap-2 underline decoration-amber-500 mb-2 leading-tight">
              <Clapperboard size={24} className="text-white shrink-0" />
              <span className="break-words">ROTEIRO DE GRAVAÇÃO: <br className="sm:hidden"/><span className="text-amber-400">O SEGREDO VIP</span></span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Agência: <span className="text-white font-medium">Soy Cancún Brasil</span> • Formato: Reels / TikTok
            </p>
          </div>
          <div className="text-left md:text-right mt-2 md:mt-0">
            <div className="inline-block px-3 py-1 bg-amber-500 text-slate-900 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-widest">
              Documento de Produção
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-2">Objetivo: Autoridade e Vender</p>
          </div>
        </header>

        {/* TECHNICAL PREP BAR */}
        <section className="bg-amber-50 border-b border-amber-200 p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-start gap-2 break-inside-avoid">
            <span className="text-lg sm:text-xl leading-none">⏱️</span>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-amber-800 tracking-wider">Tempo</p>
              <p className="text-[11px] sm:text-xs text-amber-900 mt-0.5">40 a 45 segundos.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-2 break-inside-avoid">
            <span className="text-lg sm:text-xl leading-none">💡</span>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-amber-800 tracking-wider">Cenário</p>
              <p className="text-[11px] sm:text-xs text-amber-900 mt-0.5">Lobby bonito, mar ou escritório. Luz natural.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-2 break-inside-avoid">
            <span className="text-lg sm:text-xl leading-none">🗣️</span>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-amber-800 tracking-wider">Tom de Voz</p>
              <p className="text-[11px] sm:text-xs text-amber-900 mt-0.5">Postura de "Concierge", sorriso e autoridade.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-2 break-inside-avoid">
            <span className="text-lg sm:text-xl leading-none">⚙️</span>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-amber-800 tracking-wider">Dica PRO</p>
              <p className="text-[11px] sm:text-xs text-amber-900 mt-0.5">Grave em "blocos". Foco na intenção da fala.</p>
            </div>
          </div>
        </section>

        {/* SCRIPT BODY */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 grid grid-cols-1 gap-2">
          {/* HEADER TABLE (Desktop Only) */}
          <div className="hidden md:grid grid-cols-12 gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest pb-1 border-b">
            <div className="col-span-1">Tempo</div>
            <div className="col-span-1">Bloco</div>
            <div className="col-span-5">Visual & Edição (O que acontece)</div>
            <div className="col-span-5">Roteiro de Fala (O que você diz)</div>
          </div>

          <div className="space-y-4 md:space-y-0">
            {/* BLOCO 1 */}
            <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 items-stretch border-b border-slate-100 py-3 md:py-4 break-inside-avoid">
              <div className="md:col-span-1 font-mono text-amber-600 font-bold text-[10px] md:text-xs flex items-center md:items-start gap-2 md:gap-0">
                <span className="bg-amber-100 px-1.5 py-0.5 rounded md:bg-transparent md:px-0 md:py-0">0s - 5s</span>
                <span className="md:hidden text-slate-900 font-bold text-[11px] uppercase ml-auto">01: Gancho</span>
              </div>
              <div className="hidden md:block md:col-span-1 text-slate-900 font-bold text-xs uppercase">01: Gancho</div>
              <div className="md:col-span-5 bg-white p-3 sm:p-4 rounded border-l-4 border-amber-500 shadow-sm mt-1 md:mt-0">
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-800">
                  👁️ <span className="font-semibold italic">Ação:</span> Ela de frente para a câmera, com um sorriso misterioso/confiante.<br/>
                  <br/>
                  📱 <span className="font-semibold text-blue-600 flex mt-1">Edit: 2s rápidos de fotos bonitas de Cancún passando na tela e volta pro rosto dela. Texto: "O que as fotos de Cancún não te contam."</span>
                </p>
              </div>
              <div className="md:col-span-5 flex items-center bg-slate-900 text-slate-100 p-4 rounded font-serif italic text-sm md:text-[15px] leading-snug">
                "As fotos de Cancún na internet escondem um detalhe que dita exatamente se a sua viagem vai ser incrível ou cansativa."
              </div>
            </div>

            {/* BLOCO 2 */}
            <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 items-stretch border-b border-slate-100 py-3 md:py-4 break-inside-avoid">
              <div className="md:col-span-1 font-mono text-amber-600 font-bold text-[10px] md:text-xs flex items-center md:items-start gap-2 md:gap-0">
                <span className="bg-amber-100 px-1.5 py-0.5 rounded md:bg-transparent md:px-0 md:py-0">5s - 15s</span>
                <span className="md:hidden text-slate-900 font-bold text-[11px] uppercase ml-auto">02: O Insight</span>
              </div>
              <div className="hidden md:block md:col-span-1 text-slate-900 font-bold text-xs uppercase">02: O Insight</div>
              <div className="md:col-span-5 bg-white p-3 sm:p-4 rounded border-l-4 border-slate-300 shadow-sm mt-1 md:mt-0">
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-800">
                  👁️ <span className="font-semibold italic">Ação:</span> Corte de câmera mais próximo (sutil). Ela usa as mãos para explicar.
                </p>
              </div>
              <div className="md:col-span-5 flex items-center bg-slate-900 text-slate-100 p-4 rounded font-serif italic text-sm md:text-[15px] leading-snug">
                "A gente sempre acha que o segredo de uma viagem perfeita é apenas escolher um resort maravilhoso e a praia mais bonita. Mas a verdadeira mágica do Caribe acontece no ritmo do seu roteiro."
              </div>
            </div>

            {/* BLOCO 3 */}
            <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 items-stretch border-b border-slate-100 py-3 md:py-4 break-inside-avoid">
              <div className="md:col-span-1 font-mono text-amber-600 font-bold text-[10px] md:text-xs flex items-center md:items-start gap-2 md:gap-0">
                <span className="bg-amber-100 px-1.5 py-0.5 rounded md:bg-transparent md:px-0 md:py-0">15s - 35s</span>
                <span className="md:hidden text-slate-900 font-bold text-[11px] uppercase ml-auto">03: Fator 'Uau'</span>
              </div>
              <div className="hidden md:block md:col-span-1 text-slate-900 font-bold text-xs uppercase">03: Fator 'Uau'</div>
              <div className="md:col-span-5 bg-white p-3 sm:p-4 rounded border-l-4 border-slate-300 shadow-sm mt-1 md:mt-0">
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-800">
                  👁️ <span className="font-semibold italic">Ação:</span> Tom de voz acolhedor.<br/>
                  <br/>
                  📱 <span className="font-semibold text-blue-600 flex mt-1">Edit: Colocar cenas leves de um transfer chegando e pessoas relaxando em um barco.</span>
                </p>
              </div>
              <div className="md:col-span-5 flex items-center bg-slate-900 text-slate-100 p-4 rounded font-serif italic text-sm md:text-[15px] leading-snug">
                "É saber intercalar um dia de parque intenso, de muita caminhada, com um dia de relaxamento total navegando por Isla Mujeres. Ter a inteligência de uma logística pontual te esperando, sem você precisar pesquisar rotas. O maior conforto de uma viagem não é uma cama de hotel, é a paz de espírito de acordar sabendo que a sua única tarefa do dia é aproveitar."
              </div>
            </div>

            {/* BLOCO 4 */}
            <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 items-stretch py-3 md:py-4 bg-amber-100/50 rounded-lg p-2 sm:p-2 break-inside-avoid border border-amber-200/50">
              <div className="md:col-span-1 font-mono text-amber-600 font-bold text-[10px] md:text-xs flex items-center md:items-start gap-2 md:gap-0 mt-1 md:mt-2">
                <span className="bg-amber-200 px-1.5 py-0.5 rounded md:bg-transparent md:px-0 md:py-0">35s - 45s</span>
                <span className="md:hidden text-slate-900 font-bold text-[11px] uppercase ml-auto">04: Venda</span>
              </div>
              <div className="hidden md:block md:col-span-1 text-slate-900 font-bold text-xs uppercase mt-1 md:mt-2">04: Venda</div>
              <div className="md:col-span-5 bg-white p-3 sm:p-4 rounded border-l-4 border-amber-500 shadow-sm mt-1 md:mt-0">
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-800">
                  👁️ <span className="font-semibold italic">Ação:</span> Sorriso aberto, apontando levemente para a legenda.<br/>
                  <br/>
                  📱 <span className="font-semibold text-blue-600 flex mt-1">Edit: Texto na tela: "Viaje com inteligência."</span>
                </p>
              </div>
              <div className="md:col-span-5 flex items-center bg-slate-900 text-slate-100 p-4 rounded font-serif italic text-sm md:text-[15px] leading-snug">
                "E é exatamente essa organização inteligente que a nossa equipe faz por você. Se você quer viver as melhores férias da sua vida com zero preocupação, clica no link da bio e vamos desenhar a sua viagem."
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="p-4 sm:p-6 bg-slate-100 border-t flex flex-col md:flex-row justify-between items-center text-[9px] sm:text-[10px] text-slate-500 mt-auto gap-2 md:gap-0 text-center md:text-left">
          <p>© 2026 SOY CANCÚN BRASIL - TODOS OS DIREITOS RESERVADOS</p>
          <p className="font-bold flex items-center gap-1 justify-center relative z-10 bg-slate-100">
            ESTE ROTEIRO É CONFIDENCIAL 
            <span className="w-1 h-1 bg-slate-400 rounded-full mx-1"></span> 
            DOCUMENTO_V1.02_VIP
          </p>
        </footer>
      </div>
    </div>
  );
}

