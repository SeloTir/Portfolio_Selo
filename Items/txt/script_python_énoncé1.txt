N=int(input("Entrez un entier N supérieur ou égale à 5: "))
MaChaine="abcdefghijklmnopqrstuvwxyz" * N #Création de ma chaîne

print(MaChaine) # Affichage de ma chaîne

TaChaine= MaChaine[len(MaChaine)-17:]  # Récupération des 17 derniers éléments de MaChaine

for i in range(len(MaChaine)):
    if i%2==0:
        MaChaine = MaChaine[0:i] + MaChaine[i].upper() + MaChaine[i+1::] # Mise en majuscule des caractères de rang pair

MaChaine = MaChaine[::-1] # Inversion de la chaîne

print(MaChaine) # Affichage de la chaîne inversée

l=int(len(TaChaine)/2)+1
pyramide = ""
for i in range(l):
    pyramide = " "*i+TaChaine[i:len(TaChaine)-i]+" "*i+"\n" + pyramide
print(pyramide) # Affichage de la pyramide

debut = int(input("Entrez un entier : "))
fin = int(input("Entrez un entier supérieur au précédent : "))

print("Taille du tableau : "+str(len(MaChaine[debut:fin])))
print("Tableau : "+MaChaine[debut:fin]) # Affichage du tableau

TaChaine = ''.join(sorted(TaChaine))

print("Tableau trié : "+TaChaine) # Affichage du tableau trié