interface Enemy {
  name: string;
  tier: string;
  url: string;
  mobId: number;
  count: number;
}

const tierCEnemies: Enemy[] = [
  { name: "Drácula", tier: "C", url: "https://ragnatales.com.br/db/mobs/20185/", mobId: 20185, count: 3 },
  { name: "Drake", tier: "C", url: "https://ragnatales.com.br/db/mobs/20186/", mobId: 20186, count: 3 },
  { name: "General Tartaruga", tier: "C", url: "https://ragnatales.com.br/db/mobs/20200/", mobId: 20200, count: 3 },
  { name: "Maya", tier: "C", url: "https://ragnatales.com.br/db/mobs/20191/", mobId: 20191, count: 3 },
  { name: "Serpente Suprema", tier: "C", url: "https://ragnatales.com.br/db/mobs/20237/", mobId: 20237, count: 3 },
  { name: "Faraó", tier: "C", url: "https://ragnatales.com.br/db/mobs/20197/", mobId: 20197, count: 3 },
  { name: "Freeoni", tier: "C", url: "https://ragnatales.com.br/db/mobs/20198/", mobId: 20198, count: 3 },
  { name: "Hatii", tier: "C", url: "https://ragnatales.com.br/db/mobs/20188/", mobId: 20188, count: 3 },
  { name: "Eddga", tier: "C", url: "https://ragnatales.com.br/db/mobs/20187/", mobId: 20187, count: 3 },
  { name: "Flor do Luar", tier: "C", url: "https://ragnatales.com.br/db/mobs/20193/", mobId: 20193, count: 3 },
  { name: "Abelha-Rainha", tier: "C", url: "https://ragnatales.com.br/db/mobs/20192/", mobId: 20192, count: 3 },
  { name: "Cavaleiro da Tempestade", tier: "C", url: "https://ragnatales.com.br/db/mobs/20190/", mobId: 20190, count: 3 },
  { name: "Lady Tanee", tier: "C", url: "https://ragnatales.com.br/db/mobs/20238/", mobId: 20238, count: 1 },
  { name: "Samurai Encarnado", tier: "C", url: "https://ragnatales.com.br/db/mobs/20235/", mobId: 20235, count: 1 },
  { name: "Tao Gunka", tier: "C", url: "https://ragnatales.com.br/db/mobs/20199/", mobId: 20199, count: 1 },
  { name: "Orc Herói", tier: "C", url: "https://ragnatales.com.br/db/mobs/20195/", mobId: 20195, count: 1 },
  { name: "Lady Branca", tier: "C", url: "https://ragnatales.com.br/db/mobs/20236/", mobId: 20236, count: 1 },
  { name: "Doppelganger", tier: "C", url: "https://ragnatales.com.br/db/mobs/20184/", mobId: 20184, count: 1 },
  { name: "Boitata", tier: "C", url: "https://ragnatales.com.br/db/mobs/20230/", mobId: 20230, count: 1 },
  { name: "Gorynynch", tier: "C", url: "https://ragnatales.com.br/db/mobs/20239/", mobId: 20239, count: 1 },
  { name: "Osíris", tier: "C", url: "https://ragnatales.com.br/db/mobs/20196/", mobId: 20196, count: 3 },
  { name: "Besouro-Ladrão Dourado", tier: "C", url: "https://ragnatales.com.br/db/mobs/20189/", mobId: 20189, count: 1 },
  { name: "Fenrir", tier: "C", url: "https://ragnatales.com.br/db/mobs/20253/", mobId: 20253, count: 1 },
  { name: "Rei Poring", tier: "C", url: "https://ragnatales.com.br/db/mobs/20254/", mobId: 20254, count: 1 },
];

const tierBEnemies: Enemy[] = [
  { name: "Egnigem Cenia", tier: "B", url: "https://ragnatales.com.br/db/mobs/20215/", mobId: 20215, count: 3 },
  { name: "Senhor dos Orcs", tier: "B", url: "https://ragnatales.com.br/db/mobs/20194/", mobId: 20194, count: 3 },
  { name: "Senhor dos Mortos", tier: "B", url: "https://ragnatales.com.br/db/mobs/20206/", mobId: 20206, count: 1 },
  { name: "Vesper", tier: "B", url: "https://ragnatales.com.br/db/mobs/20211/", mobId: 20211, count: 1 },
  { name: "Bafomé", tier: "B", url: "https://ragnatales.com.br/db/mobs/20182/", mobId: 20182, count: 1 },
  { name: "Senhor das Trevas", tier: "B", url: "https://ragnatales.com.br/db/mobs/20183/", mobId: 20183, count: 1 },
  { name: "RSX-0806", tier: "B", url: "https://ragnatales.com.br/db/mobs/20214/", mobId: 20214, count: 1 },
  { name: "Polvo Gigante", tier: "B", url: "https://ragnatales.com.br/db/mobs/20251/", mobId: 20251, count: 1 },
  { name: "Amon Ra", tier: "B", url: "https://ragnatales.com.br/db/mobs/20181/", mobId: 20181, count: 1 },
  { name: "Detardeurus", tier: "B", url: "https://ragnatales.com.br/db/mobs/20209/", mobId: 20209, count: 1 },
  { name: "Cabra da Peste", tier: "B", url: "https://ragnatales.com.br/db/mobs/21284/", mobId: 21284, count: 1 },
  { name: "Cabra Safado", tier: "B", url: "https://ragnatales.com.br/db/mobs/21285/", mobId: 21285, count: 1 },
  { name: "Cabra Macho", tier: "B", url: "https://ragnatales.com.br/db/mobs/21286/", mobId: 21286, count: 1 },
];

const tierAEnemies: Enemy[] = [
  { name: "Atroce", tier: "A", url: "https://ragnatales.com.br/db/mobs/20216/", mobId: 20216, count: 3 },
  { name: "Celine Kimi", tier: "A", url: "https://ragnatales.com.br/db/mobs/20252/", mobId: 20252, count: 1 },
  { name: "Bispo Decadente", tier: "A", url: "https://ragnatales.com.br/db/mobs/20218/", mobId: 20218, count: 1 },
  { name: "Kiel D-01", tier: "A", url: "https://ragnatales.com.br/db/mobs/20212/", mobId: 20212, count: 1 },
  { name: "Pesar Noturno", tier: "A", url: "https://ragnatales.com.br/db/mobs/20219/", mobId: 20219, count: 1 },
  { name: "Presa Flamejante", tier: "A", url: "https://ragnatales.com.br/db/mobs/20222/", mobId: 20222, count: 1 },
  { name: "Detardeurus Esquelético", tier: "A", url: "https://ragnatales.com.br/db/mobs/20224/", mobId: 20224, count: 1 },
  { name: "Rei da Noite", tier: "A", url: "https://ragnatales.com.br/db/mobs/20229/", mobId: 20229, count: 1 },
  { name: "Réquiem de Marfim", tier: "A", url: "https://ragnatales.com.br/db/mobs/20230/", mobId: 20230, count: 1 },
  { name: "Groteskia", tier: "A", url: "https://ragnatales.com.br/db/mobs/20241/", mobId: 20241, count: 1 },
  { name: "Drogon", tier: "A", url: "https://ragnatales.com.br/db/mobs/20231/", mobId: 20231, count: 1 },
  { name: "Memória de Thanatos", tier: "A", url: "https://ragnatales.com.br/db/mobs/20210/", mobId: 20210, count: 1 },
  { name: "Skoll", tier: "A", url: "https://ragnatales.com.br/db/mobs/20243/", mobId: 20243, count: 1 },
  { name: "Venomorfo Perfeito", tier: "A", url: "https://ragnatales.com.br/db/mobs/20245/", mobId: 20245, count: 1 },
  { name: "Amdarais", tier: "A", url: "https://ragnatales.com.br/db/mobs/20250/", mobId: 20250, count: 1 },
];

const tierSEnemies: Enemy[] = [
  { name: "Belzebu", tier: "S", url: "https://ragnatales.com.br/db/mobs/20217/", mobId: 20217, count: 1 },
  { name: "Kraken", tier: "S", url: "https://ragnatales.com.br/db/mobs/20233/", mobId: 20233, count: 1 },
  { name: "Ktullanux", tier: "S", url: "https://ragnatales.com.br/db/mobs/20221/", mobId: 20221, count: 1 },
  { name: "Rainha Scaraba", tier: "S", url: "https://ragnatales.com.br/db/mobs/20232/", mobId: 20232, count: 1 },
  { name: "Ifrit", tier: "S", url: "https://ragnatales.com.br/db/mobs/20220/", mobId: 20220, count: 1 },
  { name: "Valquíria Randgris", tier: "S", url: "https://ragnatales.com.br/db/mobs/20213/", mobId: 20213, count: 1 },
  { name: "Rainha Verme", tier: "S", url: "https://ragnatales.com.br/db/mobs/20223/", mobId: 20223, count: 1 },
  { name: "Morroc Ferido", tier: "S", url: "https://ragnatales.com.br/db/mobs/20180/", mobId: 20180, count: 1 },
  { name: "Avatar de Freya", tier: "S", url: "https://ragnatales.com.br/db/mobs/20242/", mobId: 20242, count: 1 },
  { name: "Naght Sieger", tier: "S", url: "https://ragnatales.com.br/db/mobs/20208/", mobId: 20208, count: 1 },
  { name: "Gioia", tier: "S", url: "https://ragnatales.com.br/db/mobs/20244/", mobId: 20244, count: 1 },
  { name: "Amdarais Corrompido", tier: "S", url: "https://ragnatales.com.br/db/mobs/21287/", mobId: 21287, count: 1 },
  { name: "Bio 03", tier: "S", url: "https://ragnatales.com.br/db/mobs/20201/", mobId: -1, count: 1 },
  { name: "Bio 04", tier: "S", url: "https://ragnatales.com.br/db/mobs/20226/", mobId: -2, count: 1 },
  { name: "Calabouço dos Castelos", tier: "S", url: "https://ragnatales.com.br/db/mobs/21282/", mobId: -3, count: 1 },
];

const lab3Enemies = [
  { name: "Lorde Seyren", tier: "S", url: "https://ragnatales.com.br/db/mobs/20201/", mobId: 20201, count: 1 },
  { name: "Mestre-Ferreiro Howard", tier: "S", url: "https://ragnatales.com.br/db/mobs/20202/", mobId: 20202, count: 1 },
  { name: "Algoz Eremes", tier: "S", url: "https://ragnatales.com.br/db/mobs/20203/", mobId: 20203, count: 1 },
  { name: "Arquimaga Kathryne", tier: "S", url: "https://ragnatales.com.br/db/mobs/20204/", mobId: 20204, count: 1 },
  { name: "Sacerdotisa Margaretha", tier: "S", url: "https://ragnatales.com.br/db/mobs/20205/", mobId: 20205, count: 1 },
  { name: "Atiradora de Elite Cecil", tier: "S", url: "https://ragnatales.com.br/db/mobs/20225/", mobId: 20225, count: 1 },
];

const lab4Enemies = [
  { name: "Paladino Randel", tier: "S", url: "https://ragnatales.com.br/db/mobs/20226/", mobId: 20226, count: 1 },
  { name: "Criador Flamel", tier: "S", url: "https://ragnatales.com.br/db/mobs/20227/", mobId: 20227, count: 1 },
  { name: "Professora Celia", tier: "S", url: "https://ragnatales.com.br/db/mobs/20246/", mobId: 20246, count: 1 },
  { name: "Mestre Chen", tier: "S", url: "https://ragnatales.com.br/db/mobs/20247/", mobId: 20247, count: 1 },
  { name: "Menestrel Alphochio", tier: "S", url: "https://ragnatales.com.br/db/mobs/20248/", mobId: 20248, count: 1 },
  { name: "Desordeira Gertie", tier: "S", url: "https://ragnatales.com.br/db/mobs/20249/", mobId: 20249, count: 1 },
  { name: "Cigana Trentini", tier: "S", url: "https://ragnatales.com.br/db/mobs/20228/", mobId: 20228, count: 1 },
];

const castleDungeonEnemies = [
  { name: "Verão Ancestral", tier: "S", url: "https://ragnatales.com.br/db/mobs/21282/", mobId: 21282, count: 1 },
  { name: "Primavera Ancestral", tier: "S", url: "https://ragnatales.com.br/db/mobs/21280/", mobId: 21280, count: 1 },
  { name: "Inverno Ancestral", tier: "S", url: "https://ragnatales.com.br/db/mobs/21283/", mobId: 21283, count: 1 },
  { name: "Outono Ancestral", tier: "S", url: "https://ragnatales.com.br/db/mobs/21281/", mobId: 21281, count: 1 },
];

const allEnemies: Enemy[] = [...tierCEnemies, ...tierBEnemies, ...tierAEnemies, ...tierSEnemies];

export { allEnemies, lab3Enemies, lab4Enemies, castleDungeonEnemies };
export type { Enemy };
