# Projekt IM5

## Ziel

Die Bachelorarbeit befasst sich mit dem Thema Darstellung der Männlichkeit im Spielfilm. Als Lehrprojekt mache ich daher einen Kurzfilm. Da eine Filmproduktion ganz schön viel Arbeit ist, habe ich ein Scrollytelling gemacht, welches einem linear durch die verschiedenen Schritte der Produktion führt.
Ich möchte einem Laien einen Einblick geben, was es alles braucht, um einen Film auf die Beine zu stellen.

Es gibt vier Stadien und diese haben jeweils ihre eigenen Zwischenschritte. Die Website soll einen Grobüberblick der Kategorien bieten und in diesen die Einzelschritte aufzeigen.

## Challenges

### Dropdown-Menu

Das Dropdown-Menu war eine Challenge für sich. Die Grundsätzliche HTML/CSS/js Struktur, habe ich von einem Youtube-Tutorial. Das Fine-tuning, dass es so aussieht wie ich will, war allerdings nicht ganz einfach. Das Timing und die Distanzen waren ein konstantes ausprobieren, auch die Ausrichtung.

### Hintergrund-Text

Dass sich der Text im Hintergrund bewegt, war relativ einfach. Jedoch wusste ich nicht genau, wie ich ihn "unendlich" erscheinen lassen soll. Deshalb habe ich eine wohl eher unelegante Variante gewählt, indem ich den Text im HTML selbst verfielfacht habe und im CSS das Offset nach Links versetzt habe. Das hat mich dazu gezwungen den x-scroll zu sperren. 

### Farben

Die Wechselnden Farben haben zwar funktioniert, aber wenn man auf die Menus geklickt hat und die Seite an die Stelle gescrollt ist, hat die Farbe erst gewechselt, wenn man nochmal ein klein wenig nach unten gescrollt hat. Deshalb musste ich im .js einen Offset einfügen, dass die Farbe kurz bevor man zum jeweiligen Abschnitt kommt schon wechselt. Da hat mir Chat-GPT geholfen.

### Einzelschritte

Das Auftauchen der Einzelschritte waren ein kleineres Problem als gedacht. Ich habe den Code des Dropdown-Menus genommen und ein wenig modifiziert.

### Responsive

Die Website responsive zu machen war wie immer eine Challenge, vorallem das Dropdown-Menu, da ich es komplett anders gestalten und überdenken musste. Auch die Funktionen sind etwas andere, dementsprechend musste das .js auch mit anderen Funktionen gemacht werden. Um das .js responsive zu machen, habe ich ein if-else Statement aus dem ganzen Script gemacht, weiss allerdings nicht, ob das Bestpractice ist. Aber es funktioniert ;)

## Quellen

1. W3-Schools
2. Stackoverflow
3. ChatGPT
4. freecodecamp
5. YouTube-Tutorials
