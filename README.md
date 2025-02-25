Mises à jour
<br/><br/><br/># 0.02:
<br/>Mise à jour des // @include
<br/>
<br/><br/><br/>## 0.03:
<br/>Ajout des url d'update
<br/>
<br/><br/><br/>### 0.05:
<br/>Utilisation de MutationObserver au lieu de DOMNodeInserted
<br/>
<br/><br/><br/>### 0.06:
<br/>Menu sur une seule ligne
<br/>Ne traiter que les articles non modifiés
<br/>Ajout du lien discussions dans le menu
<br/>
<br/><br/><br/>### 0.07:
<br/>Autre approche, ajouter une balise style
<br/>
<br/><br/><br/>### 0.08:
<br/>Un peu de css, voir le screenshot
<br/>
<br/><br/><br/>### 0.09:
<br/>Des filtres basés sur le contenu avec du css uniquement
<br/>
<br/>Orange correspond à un de mes filtres regroupant les marchands de jeux PC
<br/>Vert pour la Xbox
<br/>Fade - pour les deals expirés
<br/>Fade + pour les deals avec de la lingerie ou des jouets pour adultes( j'ai vu que la demande était passée pour ce type de filtre)
<br/>
<br/><br/><br/>### 0.10:
<br/>Cosmétique
<br/>
<br/><br/><br/>### 0.11
<br/>Cosmétique
<br/>Les deals destinés au adultes ne sont plus cachés, juste la photo.
<br/>
<br/><br/><br/>### 0.12:
<br/>Simplification des includes
<br/>Ajout d'une exclusion https://www.dealabs.com/submission*
<br/>Suite à la nouvelle apparence du premier menu, j'incruste ceux de la deuxiéme ligne
<br/>
<br/><br/><br/>### 0.15:
<br/>Ajout d'un menu pour les différentes catégories des discussions qui s'ouvre en haut à gauche
<br/>Amélioration des filtres, possibilité de cibler un ensemble de mots 
<br/>Exemple  : [["walkman",["drone","cam"],["tv","45","oled"],"skate""],"<br/><br/><br/>###5fcdf5","keywords","<br/><br/><br/>###000000"] 
<br/>Résultat : 
<br/>un walman 
<br/>un drone muni d'une camera
<br/>une tv oled de 45 pouces   !! pas de guillemets
<br/>un skate
<br/>Couleur de fond en bleu
<br/>
<br/><br/><br/>### 0.16:
<br/>Réorganisarion du code
<br/>Les images cachées apparaissent au survol
<br/>
<br/><br/><br/>### 0.18:
<br/>Optimisation de la fonction filtre perso
<br/>- filtre pour mot ou groupe de mots, statut ok.
<br/>- filtre pour mot ou groupe de mots en ignorant certains termes, statut ok.
<br/>
0.19
<br/>Ajout de 2 variables ( 1 pour activer le filtre )
<br/>- VarApplyMyAdultFilter 
<br/>- VarApplyMyfilters 
<br/>
<br/>Amélioration de la fonction filtre perso, renommée en applyFilters()
<br/> Que sait-on à propos des url ?
<br/> - pas les même termes que les title
<br/> - pas d'accents
<br/> - tout en minuscule
<br/> - chaque mot est suivi d'un tiret    
<br/> 
<br/> 3 exemples:
<br/> - https://www.dealabs.com/bons-plans/ensemble-sommier-lit-140-190-123456789
<br/> - https://www.dealabs.com/bons-plans/table-basse-123456789
<br/> - https://www.dealabs.com/bons-plans/pc-portable-123456789   
<br/>
<br/> !! Limite : [href*="'table-" i]';   
<br/>
<br/> Solution:
<br/> - changement du selecteur  [title~="table" i]' (mot complet) au lieu de * (chaine dans un mot) 
<br/>
0.20
<br/>Amélioration de la fonction filtre perso
<br/> Que sait-on à propos des url ?
<br/> - pas les même termes que les title
<br/> 
<br/> Exemple:
<br/> !! https://www.dealabs.com/bons-plans/pc-portable-gamer-erazer-deputy-p60-156-fhd-144hz-i7-12650h-16go-ssd-512go-rtx-4070-livre-sans-windows-3007406
<br/> Présence de virgules.
<br/> En cherchant 4070: 
<br/> - ok pour l'url: pc-portable-gamer-erazer-deputy-p60-156-fhd-144hz-i7-12650h-16go-ssd-512go-rtx-4070-livre-sans-windows-3007406
<br/> - pas ok pour le title: PC Portable 15,6" Erazer Deputy P60 - FHD 144Hz, i7-12650H, 16 Go ram, SSD 512 Go, RTX 4070, Sans OS 
<br/>
<br/> Solution:
<br/> ,[title~="4070" i][href*="4070-" i]
<br/> devrait être 
<br/> ,[title~="4070" i],[href*="4070-" i]
<br/>
<br/>
<br/>
<br/><br/><br/>### screenshot
<br/>[1](/ori.png)
<br/>
<br/><br/><br/>### screenshot
<br/>![2](modif.png)
<br/>
<br/><br/><br/>### screenshot
<br/>![3](modif_v12.png)
<br/>
<br/><br/><br/>### screenshot
<br/>![4](orange%20vert.png)
<br/>
<br/><br/><br/>### screenshot
<br/>![5](menu.png)
<br/>
