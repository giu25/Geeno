function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(meta|meth|anfe|mdma|md)'))
			return [" Ok se ha fatto uso di metanfetamina: 1) Allontana la persona da luoghi con luci luminose ed affollati 2) Rimuovi indumenti costrittivi come colletti e cinture 3) Applica impacchi di ghiaccio o acqua fredda 4) Se la persona è svenuta, stendila su un fianco piegandole la gamba superiore. Chiama immediatamente un’ambulanza."];
		
		if(this.match('(cocaina|coca|coke|svelta|snow|neve|bianca|blow|soffio|cubaita|bamba|fiocco|pippato|pippare)'))
			return [" Ok se ha fatto uso di cocaina: 1) NON dare da mangiare o da bere altro che non sia acqua 2) Fai sedere la persona in un luogo ventilato 3) Presta attenzione a comportamenti aggressivi, libera l’area da oggetti taglienti 4) Non lasciare mai da sola la persona. Se la persona è incosciente ma respira, stendila a terra su di un fianco in posizione antishock. Chiama immediatamente un ambulanza"];

		if(this.match('(canna|cannabinoid|cannon|joint|420|quattroeventi|erba|spinello|weed|fumo|bong|roar|giolla|marijuana)'))
			return [" Ok se ha fatto uso di cannabinoidi: 1) in caso di attacco di panico, fai sedere la persona in un luogo ventilato e falle bere molta acqua 2) Siediti al suo fianco e respira normalmente per impedire la sua iperventilazione 3) Parlale normalmente e rimani nel suo campo visivo per minimizzare potenziali attacchi di panico."];

		if(this.match('(alcool|birra|hangover|vino|drink|cocktail|bevuto)'))
			return [" Ok se ha fatto uso eccessivo di alcool: 1) tieni costantemente sotto controllo la persona ed evita di farla camminare a meno che non sia assolutamente necessario 2) In caso di svenimento falla stendere su un fianco rialzando il lato cui la persona è stesa 3) In caso di battito cardiaco irregolare e/o spasmi e vomito, chiama immediatamente un’ambulanza."];
		
		if(this.match('(keta|k-hole)'))
			return [" Ok se ha fatto uso di ketamina: 1) Chiama immediatamente un’ambulanza 2) Stendi la persona su un fianco e controllala a vista 3) Non mettere la persona sotto la doccia o a contatto col ghiaccio per evitare sbalzi termici 4) non darle assolutamente da mangiare o da bere."];
		
		if(this.match('(crack|palla|rock|roccia|kriptonite|eroina|spada|bucato)'))
			return [" Ok se ha fatto uso di crack: 1) Stendi la persona di lato su un fianco e chiama immediatamente un’ambulanza 2) Controlla il suo battito cardiaco e in caso di arresto cardiaco effettua una rianimazione cardiaca."];
		
		if(this.match('(lsd)'))
			return [" Ok se ha fatto uso di lsd: 1) Non lasciare mai da sola la persona in trip 2) In caso di tensione o attacchi di panico durante l’esperienza, cercare di minimizzare gli stimoli esterni conducendo la persona in un luogo tranquillo 3) Controllala costantemente per la sua incolumità 4) In caso di ipotermia e spasmi contattare immediatamente un’ambulanza."];
		
		if(this.match('(ecstasy)'))
			return [" Ok se ha fatto uso di ecstasy: 1) Chiama immediatamente un’ambulanza e, se necessario, rianima la persona svenuta 2) Raffreddale il corpo con impacchi di ghiaccio o docce fredde 3) Reidrata quanto più possibile la persona con acqua o preferibilmente soluzioni a base di Sali minerali."];
		
		return "Ok, cerca di stare calmo e di ricordare cosa ha preso il tuo amico";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
