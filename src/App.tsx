import React, { useState } from 'react';
import { Download, Clapperboard, Clock, Video, Lightbulb, UserCheck, Eye, Smartphone, Loader2, ExternalLink, Printer } from 'lucide-react';
import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';

export default function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const openInNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  const handleNativePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('printable-script');
    if (!element) return;

    setIsGenerating(true);
    setErrorMsg('');

    try {
      // html-to-image with proper scales for mobile resolution as well
      const dataUrl = await toPng(element, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#f8fafc',
        style: {
          transform: 'none',
          boxShadow: 'none',
        }
      });
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const canvasHeight = element.offsetHeight;
      const pdfHeight = (canvasHeight * pdfWidth) / element.offsetWidth;

      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Roteiro_SOY_CANCUN_OSegredoVIP.pdf');
    } catch (error: any) {
      console.error('Erro ao gerar PDF:', error);
      setErrorMsg(error?.message || 'Erro desconhecido ao processar a imagem do PDF.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    // Responsive padding and bottom margin for the absolute action bar
    <div className="min-h-screen bg-slate-100 font-sans p-0 md:p-8 flex items-start justify-center pb-24 md:pb-8">
      
      {/* Floating Action Bar - Mobile Bottom Scrollable Row / Desktop Bottom Right Column */}
      <div 
        className="fixed bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700 p-3 
                   flex flex-row overflow-x-auto gap-3 z-50 no-print 
                   md:bottom-6 md:right-6 md:left-auto md:w-auto md:bg-transparent md:border-0 md:p-0 
                   md:flex-col md:overflow-visible items-center md:items-end md:shadow-none"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {errorMsg && (
          <div className="absolute bottom-full mb-2 left-2 right-2 md:static md:mb-0 md:left-auto md:right-auto bg-red-100 text-red-800 p-3 rounded-lg text-xs max-w-xs shadow-lg border border-red-200">
            <strong>Erro:</strong> {errorMsg}
            <p className="mt-1">Dica: O preview nativo do navegador é a opção mais segura. Clique em "Imprimir (Alta Qualidade)".</p>
          </div>
        )}
        
        <button
          onClick={openInNewTab}
          className="flex-shrink-0 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 md:px-4 md:py-3 rounded-full shadow-lg transition-transform hover:scale-105 font-bold uppercase tracking-widest text-[10px] md:text-xs min-w-max md:min-w-[200px]"
          title="Abrir em Nova Guia para impressão nativa"
        >
          <ExternalLink size={16} />
          <span className="hidden md:inline">ABRIR NOVA GUIA / TELA CHEIA</span>
          <span className="inline md:hidden">NOVA GUIA</span>
        </button>

        <button
          onClick={handleNativePrint}
          className="flex-shrink-0 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 md:px-6 md:py-3 rounded-full shadow-lg transition-transform hover:scale-105 font-bold uppercase tracking-widest text-[10px] md:text-xs min-w-max md:min-w-[200px]"
        >
          <Printer size={16} />
          <span className="hidden md:inline">IMPRIMIR (ALTA QUALIDADE)</span>
          <span className="inline md:hidden">IMPRIMIR</span>
        </button>

        <button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="flex-shrink-0 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 text-slate-900 px-5 py-3 md:px-6 md:py-3 rounded-full shadow-lg transition-transform hover:scale-105 disabled:hover:scale-100 font-bold uppercase tracking-widest text-[10px] md:text-xs min-w-max md:min-w-[200px]"
        >
          {isGenerating ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              GERANDO...
            </>
          ) : (
            <>
              <Download size={16} />
              BAIXAR IMAGEM (PDF)
            </>
          )}
        </button>
      </div>

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
              <p className="text-[11px] sm:text-xs text-amber-900 mt-0.5">45 a 55 segundos.</p>
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
                <span className="bg-amber-100 px-1.5 py-0.5 rounded md:bg-transparent md:px-0 md:py-0">0s - 3s</span>
                <span className="md:hidden text-slate-900 font-bold text-[11px] uppercase ml-auto">01: Gancho</span>
              </div>
              <div className="hidden md:block md:col-span-1 text-slate-900 font-bold text-xs uppercase">01: Gancho</div>
              <div className="md:col-span-5 bg-white p-3 sm:p-4 rounded border-l-4 border-amber-500 shadow-sm mt-1 md:mt-0">
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-800">
                  👁️ <span className="font-semibold italic">Ação:</span> Comece caminhando um passo em direção à câmera, ajeite o cabelo ou óculos.<br/>
                  <br/>
                  📱 <span className="font-semibold text-blue-600 flex mt-1">Edit: "O segredo para ser VIP no México (sem gastar fortunas)."</span>
                </p>
              </div>
              <div className="md:col-span-5 flex items-center bg-slate-900 text-slate-100 p-4 rounded font-serif italic text-sm md:text-[15px] leading-snug">
                "Como ser tratado como um verdadeiro VIP aqui em Cancún, sem precisar gastar uma fortuna a mais por isso?"
              </div>
            </div>

            {/* BLOCO 2 */}
            <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 items-stretch border-b border-slate-100 py-3 md:py-4 break-inside-avoid">
              <div className="md:col-span-1 font-mono text-amber-600 font-bold text-[10px] md:text-xs flex items-center md:items-start gap-2 md:gap-0">
                <span className="bg-amber-100 px-1.5 py-0.5 rounded md:bg-transparent md:px-0 md:py-0">3s - 15s</span>
                <span className="md:hidden text-slate-900 font-bold text-[11px] uppercase ml-auto">02: Conexão</span>
              </div>
              <div className="hidden md:block md:col-span-1 text-slate-900 font-bold text-xs uppercase">02: Conexão</div>
              <div className="md:col-span-5 bg-white p-3 sm:p-4 rounded border-l-4 border-slate-300 shadow-sm mt-1 md:mt-0">
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-800">
                  👁️ <span className="font-semibold italic">Ação:</span> Você agora está parada, com uma postura elegante e um sorriso leve.<br/>
                  <br/>
                  📱 <span className="font-semibold text-blue-600 flex mt-1">Edit: Vídeo de fundo rápido mostrando turistas espremidos em filas.</span>
                </p>
              </div>
              <div className="md:col-span-5 flex items-center bg-slate-900 text-slate-100 p-4 rounded font-serif italic text-sm md:text-[15px] leading-snug">
                "Todo mundo que planeja uma viagem pra Cancún quer exclusividade. Mas a verdade é que muitos turistas acabam vivendo aquela mesma experiência padronizada, sem profundidade e emoção."
              </div>
            </div>

            {/* BLOCO 3 */}
            <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 items-stretch border-b border-slate-100 py-3 md:py-4 break-inside-avoid">
              <div className="md:col-span-1 font-mono text-amber-600 font-bold text-[10px] md:text-xs flex items-center md:items-start gap-2 md:gap-0">
                <span className="bg-amber-100 px-1.5 py-0.5 rounded md:bg-transparent md:px-0 md:py-0">15s - 30s</span>
                <span className="md:hidden text-slate-900 font-bold text-[11px] uppercase ml-auto">03: Revelação</span>
              </div>
              <div className="hidden md:block md:col-span-1 text-slate-900 font-bold text-xs uppercase">03: Revelação</div>
              <div className="md:col-span-5 bg-white p-3 sm:p-4 rounded border-l-4 border-amber-500 shadow-sm mt-1 md:mt-0">
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-800">
                  👁️ <span className="font-semibold italic">Ação:</span> A câmera dá um zoom leve. Gesticule com as mãos para demonstrar firmeza.<br/>
                  <br/>
                  📱 <span className="font-semibold text-blue-600 flex mt-1">Edit: "Acesso Local."</span>
                </p>
              </div>
              <div className="md:col-span-5 flex items-center bg-slate-900 text-slate-100 p-4 rounded font-serif italic text-sm md:text-[15px] leading-snug">
                "Na Soy Cancún, o nosso maior diferencial não é apenas te entregar ingressos. É te dar Acesso Local. E é exatamente por isso que nós fazemos questão de operar com guias nativos mexicanos."
              </div>
            </div>

            {/* BLOCO 4 */}
            <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 items-stretch border-b border-slate-100 py-3 md:py-4 break-inside-avoid">
              <div className="md:col-span-1 font-mono text-amber-600 font-bold text-[10px] md:text-xs flex items-center md:items-start gap-2 md:gap-0">
                <span className="bg-amber-100 px-1.5 py-0.5 rounded md:bg-transparent md:px-0 md:py-0">30s - 42s</span>
                <span className="md:hidden text-slate-900 font-bold text-[11px] uppercase ml-auto">04: Argumento</span>
              </div>
              <div className="hidden md:block md:col-span-1 text-slate-900 font-bold text-xs uppercase">04: Argumento</div>
              <div className="md:col-span-5 bg-white p-3 sm:p-4 rounded border-l-4 border-slate-300 shadow-sm mt-1 md:mt-0">
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-800">
                  👁️ <span className="font-semibold italic">Ação:</span> Continue falando com brilho nos olhos.<br/>
                  <br/>
                  📱 <span className="font-semibold text-blue-600 flex mt-1">Edit: Cobrir o rosto por 2s com imagens de um guia mexicano sorrindo com clientes em lugar lindo.</span>
                </p>
              </div>
              <div className="md:col-span-5 flex items-center bg-slate-900 text-slate-100 p-4 rounded font-serif italic text-sm md:text-[15px] leading-snug">
                "O nativo tem a chave da cidade. Eles conhecem os atalhos nos parques que ninguém te conta, sabem a hora exata que o cenote está mais vazio e têm o respeito de todos os locais. Você recebe a verdadeira hospitalidade mexicana e a imersão na cultura, mas com toda a segurança, organização e suporte da nossa equipe."
              </div>
            </div>

            {/* BLOCO 5 */}
            <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 items-stretch py-3 md:py-4 bg-amber-100/50 rounded-lg p-2 sm:p-2 break-inside-avoid border border-amber-200/50">
              <div className="md:col-span-1 font-mono text-amber-600 font-bold text-[10px] md:text-xs flex items-center md:items-start gap-2 md:gap-0 mt-1 md:mt-2">
                <span className="bg-amber-200 px-1.5 py-0.5 rounded md:bg-transparent md:px-0 md:py-0">42s - 50s</span>
                <span className="md:hidden text-slate-900 font-bold text-[11px] uppercase ml-auto">05: CTA</span>
              </div>
              <div className="hidden md:block md:col-span-1 text-slate-900 font-bold text-xs uppercase mt-1 md:mt-2">05: CTA</div>
              <div className="md:col-span-5 bg-white p-3 sm:p-4 rounded border-l-4 border-amber-500 shadow-sm mt-1 md:mt-0">
                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-800">
                  👁️ <span className="font-semibold italic">Ação:</span> Aponte o dedo para baixo (direcionando o olhar do cliente para a legenda e comentários).<br/>
                  <br/>
                  📱 <span className="font-semibold text-blue-600 flex mt-1">Edit: "Clique no Link da Bio."</span>
                </p>
              </div>
              <div className="md:col-span-5 flex items-center bg-slate-900 text-slate-100 p-4 rounded font-serif italic text-sm md:text-[15px] leading-snug">
                "Você não cruzou o oceano para ser só mais um turista. Você veio para viver o México de verdade. Clica no link da minha bio, ou comenta 'ROTEIRO' aqui embaixo, e vamos planejar a sua viagem com exclusividade."
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="p-4 sm:p-6 bg-slate-100 border-t flex flex-col md:flex-row justify-between items-center text-[9px] sm:text-[10px] text-slate-500 mt-auto gap-2 md:gap-0 text-center md:text-left">
          <p>© 2024 SOY CANCÚN BRASIL - TODOS OS DIREITOS RESERVADOS</p>
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

