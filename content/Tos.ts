/**
 * @file content/Tos.ts
 * @description Wklej tu pełny tekst regulaminu. Możesz użyć `text` albo `html`.
 */
import type { LegalContent } from "@/lib/types";

export const TOS: LegalContent = {
  title: "Terms of Service",
  updatedAt: "2025-01-01",
  html: `
    <div class="space-y-8">
      <div>
        <p>Following TOS applies only to private commissions. If you'd like to order illustration or concept arts for commercial use, please <a href="/contact" class="text-primary hover:underline">contact me</a>.</p>
      </div>

      <div>
        <h2 class="text-2xl font-semibold font-witchcraft mb-4 uppercase">Process</h2>
        <p class="italic mb-4">If there should be any deadline, it has to be set before payment - otherwise, there will be none.</p>
        <p>The customer can pay for the commission via the external payment system <em>imoje</em>, operated by ING Bank Śląski S.A. with its registered office in Katowice. Payment will be processed via an external link.</p>
        <p>Payments via PayPal have added a 5% fee.</p>
      </div>

      <div>
        <h3 class="text-2xl font-semibold font-witchcraft mb-4 uppercase">Regular commissions</h3>
        <ol class="list-decimal list-inside space-y-4">
          <li>First, I'll send you an invoice or a link for payment. After full payment, I'll send you one or more quick sketches (depending on how detailed your description was), and you'll choose your favourite or tell me what changes they need (ex. different pose of character/combination of two ideas etc). If you choose one, I reserve the right to use other sketches as YCHs.</li>
          <li>When we get the idea, I'll start working. You'll receive wip of every stage of making your commission, to check if everything is okay. If you see any mistakes, just let me know, and I'll send you the corrected version to see if it now looks okay. If you don't answer, I will not continue drawing (you can say "It looks okay" if it doesn't need any changes). If there was a deadline, not responding by the due date counts as the client cancelling a commission, in which case refunds are executed according to <em>point 2 in the Refunds and Cancellation section</em>.</li>
          <li>When the commission is finished, I'll send it as a *.png file (if you'd like to have a different file, like JPG, and/or a specific image size, inform me about it before payment).</li>
        </ol>
      </div>

      <div>
        <h3 class="text-2xl font-semibold font-witchcraft mb-4 uppercase">"Artistic Freedom" commissions</h3>
        <ol class="list-decimal list-inside space-y-4">
          <li>First, I'll send you an invoice or a link for payment, and I'll start to work when you pay. You can suggest a theme, give me a simple idea, but nothing too specific (ex. "my character sad, Victorian theme" but NOT "my character sitting on a bench wearing this exact dress, holding a bouquet of roses and crying").</li>
          <li>You are not guaranteed to receive a wip of every stage, although you can ask for it - in this case, you'll get wips, but the only corrections I may make are about design mistakes.</li>
          <li>When the commission is finished, I'll send it as a *.png file (if you'd like to have a different file, like *.JPG, and/or specific image size, inform me about it before payment).</li>
        </ol>
      </div>

      <div>
        <h2 class="text-2xl font-semibold font-witchcraft mb-4 uppercase">Corrections</h2>
        <p class="mb-4">Remember - I'll not correct mistakes that could be corrected in previous stages.</p>
        <p class="mb-4">I merge layers often, so if you didn't tell me that there was a mistake in a sketch, I may not correct it in - for example - the rendering stage. Also, I'll not change the composition we set this already on thumbnails before.</p>
        <p class="mb-4">I can correct mistakes (like "the head is too big", "the markings should look different" etc) or change/add small things ("Please move the hand a little bit" or "Can you add some flowers", "change the colour of dress" etc) but after the thumbnail stage, I'll not change the pose/background/draw another character because you changed your mind. Please, respect my time.</p>
        <p>In the case of "artistic freedom" commissions, I'll correct only design mistakes, I'll not change the idea/pose/background/props etc.</p>
      </div>

      <div>
        <h2 class="text-2xl font-semibold font-witchcraft mb-4 uppercase">Refunds and cancellation</h2>
        <p class="mb-4">If you would like to cancel the commission or file a complaint, please <a href="/contact" class="text-primary hover:underline">contact me</a>.</p>
        <ol class="list-decimal list-inside space-y-4">
          <li>After receiving the invoice, payment should be sent within 48 hours - otherwise, the commission will be cancelled.</li>
          <li>If you cancel the commission after I have already started working, I'll issue a refund equivalent to the amount of work remaining.</li>
          <li>If I miss the deadline (which has to be set BEFORE payment), you can decide to set a new deadline or to have all the money back and cancel the commission.</li>
          <li>I reserve the right to cancel the commission for personal reasons, in that case, you'll have a full refund.</li>
          <li>I reserve the right to cancel the commission due to the client's unacceptable behaviour (harassment, being inappropriate etc) if the behaviour doesn't stop after I inform the client about my boundaries. If I cancel the commission due to this reason, I'll issue a refund equivalent to the amount of work remaining.</li>
          <li>Goods made to order or personalised are not subject to a 14-day cooling-off period.</li>
          <li>After payment, there is a 14-day period for filing a complaint about technical issues.</li>
          <li>Everyone who ordered a commission can fill a complaint about technical issues.</li>
        </ol>
      </div>

      <div>
        <h2 class="text-2xl font-semibold font-witchcraft mb-4 uppercase">Other</h2>
        <ol class="list-decimal list-inside space-y-4">
          <li>I reserve the right to decide if I would like to submit your commission on my social media (or use it as an art example on a price list). But, of course, you can post every art that you commissioned anywhere you want.</li>
          <li>I reserve the right to refuse any commission without explanation.</li>
          <li>I reserve the right to interpret your character, like tweaking colours a bit etc, just to fit my style, light and theme of the painted scene. Of course, I'll not change its design as much, to make it not recognisable (ex. I'll not change markings, change colours totally, etc).</li>
          <li>Don't claim my work as your own; always leave the credit.</li>
          <li>Arts with characters that don't have any visual references - reference sheets or good quality "reference-like" art - can cost more.</li>
          <li>You can order commissions with sexual themes only if you're 18 years old or older.</li>
          <li>If you choose the payment plan option, I can start to work before you send me the full payment BUT I'll do only the amount of work comparable to the already received payment.</li>
          <li>If not stated otherwise, I can use a commission made for you for commercial purposes (merch, advertisement, etc) - this applies to commissions made since 23.06.2022.</li>
          <li>Private commissions cannot be used for the Client's commercial purposes.</li>
          <li>If you send me a reference that doesn't belong to you/you don't have permission to use it I can use it only as inspiration, I'll not copy it</li>
        </ol>
      </div>
    </div>
  `,
};
