/* ═══════════════════════════════════════════════════════
   EXERCISE-MC.JS — Múltipla Escolha interativa
   SO2 · cesarazevedo.github.io/so2
   ═══════════════════════════════════════════════════════

   Estrutura HTML esperada:

   <div class="mc-question" data-correct="b">
       <p class="mc-q-text">Pergunta aqui?</p>
       <div class="mc-options">
           <div class="mc-option" data-option="a"><span class="mc-letter">A</span><span>Opção A</span></div>
           <div class="mc-option" data-option="b"><span class="mc-letter">B</span><span>Opção B</span></div>
           <div class="mc-option" data-option="c"><span class="mc-letter">C</span><span>Opção C</span></div>
           <div class="mc-option" data-option="d"><span class="mc-letter">D</span><span>Opção D</span></div>
       </div>
       <div class="mc-explanation ok">✓ Explicação da resposta correta.</div>
   </div>
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.mc-option').forEach(function (option) {
        option.addEventListener('click', function () {
            var question = option.closest('.mc-question');
            if (!question) return;

            // Ignora clique se já respondido
            if (question.dataset.answered === 'true') return;
            question.dataset.answered = 'true';

            var correct = question.dataset.correct;
            var chosen  = option.dataset.option;

            // Trava e classifica todas as opções
            question.querySelectorAll('.mc-option').forEach(function (opt) {
                opt.classList.add('locked');
                if (opt.dataset.option === correct) {
                    if (chosen !== correct) {
                        opt.classList.add('reveal');   // mostra a certa quando errou
                    }
                }
            });

            // Marca a escolhida
            if (chosen === correct) {
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }

            // Exibe explicação
            var explanation = question.querySelector('.mc-explanation');
            if (explanation) {
                explanation.classList.add('visible');
                explanation.classList.add(chosen === correct ? 'ok' : 'err');
            }
        });
    });
});
