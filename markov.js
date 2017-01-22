var kmer_size;
var kmers = {};
var button;
var titles;
var debut = [];

// Without JQuery
var slider = new Slider('#ex2', {});

function preload(){
    titles = loadStrings("pense.txt");
    console.log(titles);
}

function setup(){
    noCanvas();
}

function list_maker(){
    for (var i = 0; i < titles.length; i++){
        var txt = titles[i];
        for (var j = 0; j <= (txt.length - kmer_size); j++){
            var kmer = txt.substring(j , j + kmer_size);
            if (j == 0){
                debut.push(kmer);
            }

            if(!kmers[kmer]){
                kmers[kmer] = []
            }
            kmers[kmer].push(txt.charAt(j+kmer_size))
        }
    }
}

function mchain() {
    var mykmer = random(debut);
    var resultat = mykmer;
    // for(var i=0; i < 100; i++){
    while(suivant != "."){
        var premier = kmers[mykmer];
        if (!premier){
            break;
        }
        var suivant = random(premier);
        resultat += suivant;
        longueur = resultat.length;
        mykmer = resultat.substring(longueur - kmer_size, longueur);
    }
    var html = document.getElementById("para");
    html.innerHTML = resultat+"<br/><small>(peut-être) par <cite>Denis Diderot</cite></small>";
}

function launch() {
    kmer_size = int(document.getElementById("dideritude").value);
    document.getElementById("para").style.display = "block";
    // alert(kmer_size);
    list_maker();
    mchain();
}
