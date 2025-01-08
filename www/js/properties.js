var selectedYear = ""
,selectedUrl=""
,isApp=false
,defaultPdfUrl = ""
,selectedChapter = ""
,highlightRender =""
.highlightText = ""
,globalSearchKeyword =""
,triggerCreate=false
,LOADING_MODAL_PROP={backdrop: 'static', keyboard: false}
,LANG = "ID"
;

const report2020pdflink = "https://www.bi.go.id/id/publikasi/laporan/Documents/LPI_2020.pdf";
const report2020vEngPdfLink = "https://www.bi.go.id/en/publikasi/laporan/Documents/10.LPI2020_full.pdf";
const comingSoonIDLink = "https://storage.googleapis.com/bi-lpi-2020/LPI_COMING_SOON_EN.pdf";
const comingSoonENLink = "https://storage.googleapis.com/bi-lpi-2020/LPI_COMING_SOON_ID.pdf";

const report_2021_ID_prakata = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_ID_forewood.pdf";
const report_2021_ID_overview = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_ID_overview.pdf";
const report_2021_ID_bab1 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_ID_BAB1.pdf";
const report_2021_ID_bab2 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_ID_BAB2.pdf";
const report_2021_ID_bab3 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_ID_BAB3.pdf";
const report_2021_ID_bab4 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_ID_BAB4.pdf";
const report_2021_ID_bab5 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_ID_BAB5.pdf";
const report_2021_ID_bab6 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_ID_BAB6.pdf";
const report_2021_ID_appendices = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_ID_lampiran.pdf";
const report_2021_ID_full = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_ID_FULL.pdf";

const report_2021_EN_prakata = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_EN_forewood.pdf";
const report_2021_EN_overview = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_EN_overview.pdf";
const report_2021_EN_bab1 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_EN_BAB1.pdf";
const report_2021_EN_bab2 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_EN_BAB2.pdf";
const report_2021_EN_bab3 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_EN_BAB3.pdf";
const report_2021_EN_bab4 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_EN_BAB4.pdf";
const report_2021_EN_bab5 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_EN_BAB5.pdf";
const report_2021_EN_bab6 = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_EN_BAB6.pdf";
const report_2021_EN_appendices = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_EN_lampiran.pdf";
const report_2021_EN_full = "https://storage.googleapis.com/bi-lpi-2020/2021/LPI_2021_EN_FULL.pdf";

const report_2022_ID_prakata = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_forewood.pdf#page=16";
const report_2022_ID_overview = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_overview.pdf";
const report_2022_ID_bab1 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_BAB1.pdf";
const report_2022_ID_bab2 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_BAB2.pdf";
const report_2022_ID_bab3 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_BAB3.pdf";
const report_2022_ID_bab4 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_BAB4.pdf";
const report_2022_ID_bab5 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_BAB5.pdf";
const report_2022_ID_bab6 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_BAB6.pdf";
const report_2022_ID_bab7 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_BAB7.pdf";
const report_2022_ID_appendices = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_lampiran.pdf";
const report_2022_ID_full = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_ID_FULL.pdf";

const report_2022_EN_prakata = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_forewood.pdf#page=16";
const report_2022_EN_overview = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_overview.pdf";
const report_2022_EN_bab1 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_BAB1.pdf";
const report_2022_EN_bab2 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_BAB2.pdf";
const report_2022_EN_bab3 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_BAB3.pdf";
const report_2022_EN_bab4 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_BAB4.pdf";
const report_2022_EN_bab5 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_BAB5.pdf";
const report_2022_EN_bab6 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_BAB6.pdf";
const report_2022_EN_bab7 = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_BAB7.pdf";
const report_2022_EN_appendices = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_lampiran.pdf";
const report_2022_EN_full = "https://storage.googleapis.com/bi-lpi-2020/2022/LPI_2022_EN_FULL.pdf";

const report_2023_ID_prakata = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_forewood.pdf#page=18";
const report_2023_ID_overview = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_overview.pdf#page=2";
const report_2023_ID_bab1 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB1.pdf#page=2";
const report_2023_ID_bab2 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB2.pdf#page=2";
const report_2023_ID_bab3 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB3.pdf#page=2";
const report_2023_ID_bab4 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB4.pdf#page=2";
const report_2023_ID_bab5 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB5.pdf#page=2";
const report_2023_ID_bab6 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB6.pdf#page=2";
const report_2023_ID_bab7 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB7.pdf#page=2";
const report_2023_ID_appendices = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_appendices.pdf";
const report_2023_ID_full = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_FULL.pdf";

const report_2023_EN_prakata = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_forewood.pdf#page=18";
const report_2023_EN_overview = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_overview.pdf";
const report_2023_EN_bab1 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB1.pdf";
const report_2023_EN_bab2 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB2.pdf";
const report_2023_EN_bab3 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB3.pdf";
const report_2023_EN_bab4 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB4.pdf";
const report_2023_EN_bab5 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB5.pdf";
const report_2023_EN_bab6 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB6.pdf";
const report_2023_EN_bab7 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB7.pdf";
const report_2023_EN_appendices = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_lampiran.pdf";
const report_2023_EN_full = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_FULL.pdf";

const report_2024s_ID_prakata = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_forewood.pdf#page=18";
const report_2024s_ID_overview = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_overview.pdf#page=2";
const report_2024s_ID_bab1 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB1.pdf#page=2";
const report_2024s_ID_bab2 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB2.pdf#page=2";
const report_2024s_ID_bab3 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB3.pdf#page=2";
const report_2024s_ID_bab4 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB4.pdf#page=2";
const report_2024s_ID_bab5 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB5.pdf#page=2";
const report_2024s_ID_bab6 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB6.pdf#page=2";
const report_2024s_ID_bab7 = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_BAB7.pdf#page=2";
const report_2024s_ID_appendices = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_appendices.pdf";
const report_2024s_ID_full = "https://storage.googleapis.com/bi-lpi-2020/2023/ID/LPI_2023_ID_FULL.pdf";

const report_2024s_EN_prakata = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_forewood.pdf#page=18";
const report_2024s_EN_overview = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_overview.pdf";
const report_2024s_EN_bab1 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB1.pdf";
const report_2024s_EN_bab2 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB2.pdf";
const report_2024s_EN_bab3 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB3.pdf";
const report_2024s_EN_bab4 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB4.pdf";
const report_2024s_EN_bab5 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB5.pdf";
const report_2024s_EN_bab6 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB6.pdf";
const report_2024s_EN_bab7 = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_BAB7.pdf";
const report_2024s_EN_appendices = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_lampiran.pdf";
const report_2024s_EN_full = "https://storage.googleapis.com/bi-lpi-2020/2023/EN/LPI_2023_EN_FULL.pdf";

var pdfLink = {
	"2015": {
		"ID" : {
			"cover" : "cover2015.jpg",
			"title": "Bersinergi Mengawal Stabilitas, Mewujudkan Reformasi Struktural",
			"prakata" : "Perubahan konstelasi ekonomi global sejak krisis 2008 lalu, yang terasa begitu luas dan mendalam, telah memunculkan "+
						"berbagai tantangan baru yang semakin komplek dalam pengelolaan stabilitas makroekonomi. Di tengah berbagai upaya yang terus ditempuh "+
						"untuk mengatasi berbagai permasalahan struktural di dalam negeri, perekonomian Indonesia selama tahun 2015 dihadapkan pada rangkaian "+
						"kejutan eksternal dalam perekonomian global, yang berdampak ke Indonesia baik melalui jalur keuangan maupun perdagangan. "+
						"Pemulihan ekonomi global ternyata tidak sesuai harapan, berjalan lambat, tidak berimbang, dan masih penuh ketidakpastian. "+
						"Negara maju, terutama perekonomian Amerika Serikat memperlihatkan pemulihan yang lebih solid. Sedangkan perekonomian negara "+
						"berkembang, terutama Tiongkok, mengalami perlambatan struktural sehingga memicu kemerosotan harga komoditas, yang pada "+
						"gilirannya terus menekan kinerja ekspor Indonesia. Ketidakseimbangan dalam pemulihan ekonomi global tersebut mengakibatkan terjadinya "+
						"divergensi siklus kebijakan moneter antara berbagai negara. Kebijakan moneter di Amerika Serikat mulai memasuki periode normalisasi, "+
						"setelah dalam kurun waktu enam tahun suku bunga dipertahankan sekitar nol persen. Sedangkan, kebijakan moneter di Eropa, Jepang, "+
						"dan negara berkembang semakin diperlonggar untuk menahan agar laju pertumbuhan ekonomi tidak semakin melambat. "+
						"Kemerosotan harga komoditas yang semakin berdampak terhadap memburuknya kinerja ekonomi negara berkembang dan ketidakpastian mengenai "+
						"kecepatan dan besarnya kenaikkan suku bunga di Amerika Serikat menjadi dua kekuatan utama yang mewarnai rangkaian gejolak di pasar keuangan "+
						"global selama tahun 2015, yang pada gilirannya berdampak pada menurunnya arus modal ke negara berkembang termasuk ke Indonesia. ​",
			"content": [{
							"title": "Cover, Daftar isi dan Prakata",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/1_CoverDaftarIsiPrakata.pdf",
							"desc": "",
							"class" : ""
						},
						{
							"title": "Tinjauan Umum",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/2_TinjauanUmum.pdf",
							"desc": "",
							"class" : ""
						},
						{
							"title": "Bagian I - Perekonomian Global",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/3_Bagian_I.pdf",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Bagian II - Perekonomian Domestik",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/4_Bagian_II.pdf",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Bagian III - Respons Bauran Kebijakan",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/5_Bagian_III.pdf",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Bagian IV - Tantangan, Arah Kebijakan dan Prospek Perekonomian Indonesia",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/6_Bagian_IV.pdf",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Lampiran",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/7_Lampiran.pdf",
							"desc": "",
							"class" : ""
						},
						{
							"title": "Laporan Perekonomian Indonesia 2015",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/LPI_2015_web_final.pdf",
							"desc": "",
							"class" : ""
						}
					]
		},
		"EN" : {
			"cover" : "cover2015.jpg",
			"title": "Synergy in Safeguarding Stability, Realizing Structural Reforms",
			"prakata" : "Perubahan konstelasi ekonomi global sejak krisis 2008 lalu, yang terasa begitu luas dan mendalam, telah memunculkan "+
						"berbagai tantangan baru yang semakin komplek dalam pengelolaan stabilitas makroekonomi. Di tengah berbagai upaya yang terus ditempuh "+
						"untuk mengatasi berbagai permasalahan struktural di dalam negeri, perekonomian Indonesia selama tahun 2015 dihadapkan pada rangkaian "+
						"kejutan eksternal dalam perekonomian global, yang berdampak ke Indonesia baik melalui jalur keuangan maupun perdagangan. "+
						"Pemulihan ekonomi global ternyata tidak sesuai harapan, berjalan lambat, tidak berimbang, dan masih penuh ketidakpastian. "+
						"Negara maju, terutama perekonomian Amerika Serikat memperlihatkan pemulihan yang lebih solid. Sedangkan perekonomian negara "+
						"berkembang, terutama Tiongkok, mengalami perlambatan struktural sehingga memicu kemerosotan harga komoditas, yang pada "+
						"gilirannya terus menekan kinerja ekspor Indonesia. Ketidakseimbangan dalam pemulihan ekonomi global tersebut mengakibatkan terjadinya "+
						"divergensi siklus kebijakan moneter antara berbagai negara. Kebijakan moneter di Amerika Serikat mulai memasuki periode normalisasi, "+
						"setelah dalam kurun waktu enam tahun suku bunga dipertahankan sekitar nol persen. Sedangkan, kebijakan moneter di Eropa, Jepang, "+
						"dan negara berkembang semakin diperlonggar untuk menahan agar laju pertumbuhan ekonomi tidak semakin melambat. "+
						"Kemerosotan harga komoditas yang semakin berdampak terhadap memburuknya kinerja ekonomi negara berkembang dan ketidakpastian mengenai "+
						"kecepatan dan besarnya kenaikkan suku bunga di Amerika Serikat menjadi dua kekuatan utama yang mewarnai rangkaian gejolak di pasar keuangan "+
						"global selama tahun 2015, yang pada gilirannya berdampak pada menurunnya arus modal ke negara berkembang termasuk ke Indonesia. ​",
			"content": [{
							"title": "Cover Contents and Foreword",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Cover_Contents_BoG_Foreword.pdf",
							"desc": "",
							"class" : ""
						},
						{
							"title": "General Review",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/General_Review.pdf",
							"desc": "",
							"class" : ""
						},
						{
							"title": "Part I - Global Economy",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/PartI_Global_Economy.pdf",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Part II - Domestic Economy",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/PartII_Domestic_Economy.pdf",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Part III - Policy Response",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/PartIII_Policy_Response.pdf",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": " Part IV - Challenges, Policy Direction and Outlook",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/PartIV_Challenges_Policy_Direction_and_Outlook.pdf",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Appendices",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Appendices.pdf",
							"desc": "",
							"class" : ""
						},
						{
							"title": "Full version",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Indonesian%20Economic%20Report%202015.pdf",
							"desc": "",
							"class" : ""
						}
					]
		}
	},
	"2016": {
		"ID" : {
			"cover" : "cover2016.jpg",
			"title": "Bersinergi Memperkuat Resiliensi, Mendorong Momentum Pemulihan Ekonomi",
			"prakata" : "Tahun 2016 yang pada awalnya diharapkan menjadi tahun percepatan pemulihan ekonomi "+
						"domestik kembali menjadi tahun yang penuh tantangan seiring dengan perkembangan global yang masih "+
						"belum menggembirakan. Ekonomi global masih belum pulih seperti yang diharapkan dan tetap diwarnai "+
						"ketidakpastian. Dinamika ekonomi global pada 2016 berkisar pada tiga permasalahan utama yang "+
						"terjadi sejak 2015, yaitu pertumbuhan ekonomi dunia yang belum kuat, harga komoditas yang masih "+
						"rendah, dan ketidakpastian pasar keuangan yang tetap tinggi.",
			"content": [{
							"title": "Cover, Daftar isi dan Prakata",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/LPI2016-web.pdf#page=1",
							"desc": "",
							"class" : ""
						},
						{
							"title": "Tinjauan Umum",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/LPI2016-web.pdf#page=28",
							"desc": "",
							"class" : ""
						},
						{
							"title": "Bagian I",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/LPI2016-web.pdf#page=45",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Bagian II",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/LPI2016-web.pdf#page=75",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Bagian III",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/LPI2016-web.pdf#page=205",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Bagian IV",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/LPI2016-web.pdf#page=269",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Lampiran",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/LPI2016-web.pdf#page=299",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Laporan Keuangan Indonesia 2016",
							"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/LPI2016-web.pdf#page=1",
							"desc": "",
							"class" : ""
						}
					]
		},
		"EN" : {
			"cover" : "cover2016.jpg",
			"title": "SYNERGY IN STRENGTHENING RESILIENCE, CAPITALIZING THE MOMENTUM OF ECONOMIC RECOVERY",
			"prakata" : "In 2016, the Indonesian economy held its ground amid sluggish global economic conditions replete with uncertainty. Key to this achievement was the structural predominance of domestic demand and support from adequate policy responses. In turn, the combination of these two factors mitigated the risk of fallout from weak global economic growth, protracted low global commodity prices, and the heightened uncertainty hanging over global financial markets. In 2016, Indonesia&#96;s economic growth climbed from 4.9% in 2015 to 5.0%. Higher growth was also supported by a sound level of economic stability marked by low inflation, decline in the current account deficit, stable exchange rate, and well maintained financial system stability with low systemic risks.",
			"content": [{
							"title": "Cover",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/LPI%202016%20Web.pdf#page=1",
							"desc": "",
							"class" : ""
						},
						{
							"title": "General review",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/LPI%202016%20Web.pdf#page=28",
							"desc": "",
							"class" : ""
						},
						{
							"title": "Chapter I",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/LPI%202016%20Web.pdf#page=45",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Chapter II",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/LPI%202016%20Web.pdf#page=75",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Chapter III",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/LPI%202016%20Web.pdf#page=201",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Chapter IV",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/LPI%202016%20Web.pdf#page=263",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Appendices",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/LPI%202016%20Web.pdf#page=293",
							"desc": "",
							"class" : "indent"
						},
						{
							"title": "Economic Report on Indonesia 2016",
							"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/LPI%202016%20Web.pdf#page=1",
							"desc": "",
							"class" : ""
						}
					]
		}
	},
	"2017": {
		"ID" : {
			"cover" : "cover2017.jpg",
			"title": "Mengoptimalkan Momentum, Memperkuat Struktur",
			"prakata" : "Ketika saya mulai memimpin Bank Indonesia pada 2013, perekonomian sedang menghadapi "+
						"meningkatnya ketidakpastian pasar keuangan global terkait perubahan arah kebijakan "+
						"moneter AS atau yang dikenal sebagai taper tantrum. Kondisi tersebut diperberat oleh "+
						"perekonomian domestik yang sedang mengalami ketidakseimbangan baik internal maupun eksternal. "+
						"Hal tersebut antara lain tercermin pada tekanan inflasi yang meningkat, pertumbuhan ekonomi "+
						"yang melambat, defisit transaksi berjalan yang melebar, serta nilai tukar yang melemah cukup tajam."+
						"Pada tahun-tahun berikutnya, perubahan arah kebijakan moneter AS terus berlanjut dengan kenaikan "+
						"Fed Funds Rate dan pengurangan neraca bank sentral. Perkembangan tersebut belum ada presedennya "+
						"yang dapat menjadi kompas dalam menentukan respons kebijakan yang mampu memitigasi rambatan "+
						"risiko dan sekaligus mendorong perbaikan ekonomi domestik. Melihat kembali pada tahun-tahun itu, "+
						"kita patut bersyukur bahwa pilihan fokus kebijakan untuk stabilisasi perekonomian yang ditempuh "+
						"secara konsisten mampu membawa perekonomian Indonesia secara berangsur terus membaik. ",
			"content": [{
					"title": "Cover",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/1_LPI2017_COVER.pdf",
					"desc": "",
					"class" : ""
				},
				{
					"title": "Tinjauan Umum",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/2_LPI2017_TINJAUAN-UMUM.pdf",
					"desc": "",
					"class" : ""
				},
				{
					"title": "Bab 1",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/3_LPI2017_BAB1.pdf",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Bab 2",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/4_LPI2017_BAB2.pdf",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Bab 3",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/5_LPI2017_BAB3.pdf",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Bab 4",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/6_LPI2017_BAB4.pdf",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Bab 5",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/7_LPI2017_BAB5.pdf",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Bab 6",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/8_LPI2017_BAB6.pdf",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Bab 7",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/9_LPI2017_BAB7.pdf",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Bab 8",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/10_LPI2017_BAB8.pdf",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Bab 9",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/11_LPI2017_BAB9.pdf",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Bab 10",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/12_LPI2017_BAB10.pdf",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Lampiran",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/13_LPI2017_LAMPIRAN.pdf",
					"desc": "",
					"class" : ""
				}
			]
		},
		"EN" : {
			"cover" : "cover2017.jpg",
			"title": "Optimizing Momentum, Reinforcing Structures",
			"prakata" : "Macroeconomic stability in Indonesia strengthened further in 2017, in tandem with gradual progress in the economic recovery. "+
						"Economic growth edged upwards and improvement in the structure of growth set in during the second half of the year. "+
						"Economic gains were bolstered by positive momentum from both global and domestic factors, although several challenges "+
						"emerged that prevented a faster recovery. Bank Indonesia, the Government and the relevant authorities implemented policies aimed at "+
						"leveraging positive momentum on several fronts to accelerate economic recovery. Simultaneously, measures were taken to reinforce "+
						"the economy at a structural level. The policy stance remained consistent and successfully preserved macroeconomic and financial system stability, "+
						"thereby paving the way for continued economic recovery. Looking ahead, policy responses will be strengthened further not only to bolster stability and mitigate risks, "+
						"but also to support the economic outlook by making further structural improvements.",
			"content": [{
					"title": "Cover",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=1",
					"desc": "",
					"class" : ""
				},
				{
					"title": "General review",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=25",
					"desc": "",
					"class" : ""
				},
				{
					"title": "Chapter 1",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=41",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Chapter 2",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=57",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Chapter 3",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=79",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Chapter 4",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=95",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Chapter 5",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=105",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Chapter 6",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=123",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Chapter 7",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=143",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Chapter 8",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=163",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Chapter 9",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=187",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Chapter 10",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=211",
					"desc": "",
					"class" : "indent"
				},
				{
					"title": "Appendices",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2017.pdf#page=247",
					"desc": "",
					"class" : ""
				}
			]
		}
	},
	"2018": {
		"ID" : {
			"cover" : "cover2018.jpg",
			"title": "Sinergi untuk ketahanan dan pertumbuhan",
			"prakata" : "Seraya memanjatkan puji syukur ke hadirat Tuhan Yang Maha Esa, atas nama Dewan Gubernur Bank Indonesia, "+
						"saya persembahkan buku Laporan Perekonomian Indonesia 2018. Buku ini memuat evaluasi menyeluruh perkembangan ekonomi "+
						"Indonesia dan respons kebijakan yang ditempuh Bank Indonesia selama tahun 2018, serta prospek ekonomi dan arah "+
						"kebijakan Bank Indonesia pada tahun 2019. Publikasi buku ini sekaligus sebagai perwujudan akuntabilitas dan "+
						"transparansi Bank Indonesia sebagaimana diamanatkan dalam Undang-Undang Bank Indonesia.",
			"prakataLink" : "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=18",
			"content": [
				// {
				// 	"title": "Cover",
				// 	"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/1_LPI2018_COVER-DAFTARISI-PRAKATA.pdf",
				// 	"desc": "",
				// 	"class" : ""
				// },
				{
					"title": "Tinjauan Umum",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=23",
					"desc": "Perekonomian Indonesia 2018 tetap kuat di tengah ketidakpastian global yang meningkat. Sinergi kebijakan Bank Indonesia, Pemerintah, dan otoritas terkait mampu mengawal ketahanan ekonomi dan mendorong berlanjutnya momentum pertumbuhan ekonomi. Ke depan, perekonomian Indonesia diprakirakan lebih baik dengan ditopang struktur ekonomi yang berimbang dan kuat.",
					"class" : ""
				},
				{
					"title": "Bab 1 Perekonomian Global",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=41",
					"desc": "Perekonomian global 2018 ditandai ketidakpastian yang meningkat dipicu tiga perkembangan yang kurang menguntungkan. Pertama, pertumbuhan ekonomi dunia melambat dari 3,8% pada 2017 menjadi 3,7% pada 2018. Pertumbuhan ekonomi yang melambat kemudian menurunkan pertumbuhan volume perdagangan dunia dan harga komoditas global. Kedua, suku bunga Federal Funds Rate (FFR) naik lebih cepat dan lebih tinggi dari respons tahun sebelumnya, sehingga memicu risiko pembalikan aliran modal dari negara berkembang. Ketiga, ketidakpastian pasar keuangan global meningkat dipicu beberapa faktor seperti peningkatan ketegangan perdagangan Amerika Serikat (AS) dengan Tiongkok dan negara lain, risiko geopolitik seperti perundingan Brexit dan krisis di beberapa negara berkembang seperti Argentina dan Turki. Ketiga faktor ini kemudian mendorong investor global menarik dananya dan mengancam stabilitas eksternal negara berkembang. Mata uang berbagai negara melemah tajam terhadap dolar AS dan menimbulkan kerentanan instabilitas makroekonomi dan sistem keuangan."+
							"<br/><br/>Ketidakpastian ekonomi global mendorong beragam respons dari berbagai negara dengan mengoptimalkan interaksi kebijakan moneter dan fiskal. Di negara maju, sebagian negara maju non-AS mengambil kebijakan moneter bias longgar untuk menjaga momentum pertumbuhan. Sementara itu, konsolidasi fiskal negara maju berlangsung perlahan, kecuali AS yang melakukan stimulus fiskal dalam jumlah besar. Di negara berkembang, tantangan terbesar dalam kebijakan ekonomi adalah dalam mengoptimalkan bauran kebijakan moneter dan fiskal untuk merespons peningkatan risiko eksternal. Sebagian besar negara berkembang menempuh kebijakan moneter ketat sebagai respons terhadap pengetatan kebijakan moneter global yang memicu arus modal keluar. Di sisi lain, kebijakan fiskal terus diseimbangkan untuk menjaga pertumbuhan ekonomi sekaligus menjaga sustainabilitas fiskal. "+
							"<br/><br/>Reformasi struktural di berbagai negara juga dilanjutkan untuk mendukung pertumbuhan ekonomi yang berkelanjutan. Reformasi struktural ditujukan untuk mendorong produktivitas, memperbaiki permasalahan sektor tenaga kerja, dan meningkatkan pertumbuhan ekonomi potensial yang terbatas akibat penuaan populasi. Kerja sama internasional juga diperkuat baik yang bersifat bilateral, regional, maupun multilateral. Kerjasama internasional ditujukan untuk mencapai pertumbuhan ekonomi yang kuat, berimbang, dan berkesinambungan, dengan tetap menjaga resiliensi perekonomian.",
					"class" : "indent"
				},
				{
					"title": "Bab 2 Pertumbuhan Ekonomi",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=59",
					"desc": "Momentum pemulihan ekonomi Indonesia berlanjut pada 2018. Pertumbuhan ekonomi 2018 tercatat 5,17%, meningkat dibandingkan dengan pertumbuhan tahun sebelumnya sebesar 5,07% (Grafik 2.1) dan merupakan pertumbuhan tertinggi sejak 2013. Secara umum, kinerja tersebut menunjukkan perekonomian Indonesia tetap solid, mengingat pada saat bersamaan pertumbuhan ekonomi dunia 2018 dalam tren melambat dan ketidakpastian global sedang meningkat. "+
							"<br/><br/>Peningkatan pertumbuhan ekonomi 2018 tidak terlepas dari dampak positif bauran kebijakan yang ditempuh Bank Indonesia dan Pemerintah dalam merespons ketidakpastian global. Satu sisi, respons kebijakan moneter yang <i>pre-emptive, front loading,</i> dan <i>ahead of the curve</i> untuk menjaga stabilitas perekonomian, khususnya nilai tukar, serta komitmen pemerintah untuk menjaga prospek kesinambungan fiskal, memberikan keyakinan pelaku ekonomi untuk melakukan ekspansi usaha. Sisi lain, arah kebijakan yang akomodatif dari kebijakan fiskal pusat-daerah, termasuk belanja proyek infrastruktur, kebijakan pendalaman pasar keuangan, kebijakan makroprudensial, kebijakan sistem pembayaran, dan kebijakan struktural memberikan stimulus bagi kegiatan ekonomi. Implementasi kebijakan tersebut pada gilirannya mendorong berlanjutnya kegiatan berusaha dan meningkatnya pertumbuhan ekonomi."+
							"<br/><br/>Pertumbuhan ekonomi Indonesia yang meningkat pada 2018 banyak ditopang oleh permintaan domestik. Pertumbuhan konsumsi dan investasi meningkat didukung pendapatan yang membaik, keberlanjutan pembangunan proyek infrastruktur, serta daya beli yang terjaga sejalan dengan tekanan inflasi yang rendah. Beberapa kegiatan lain juga memengaruhi pengeluaran penyelenggaraan pemilihan kepala daerah (Pilkada), kegiatan berskala internasional, seperti di Asian Games dan pertemuan tahunan International Monetary Fund-World Bank (IMF-WB) dan aktivitas persiapan pemilihan umum (Pemilu). Sementara itu, peran ekspor neto menurun dipengaruhi kinerja ekspor yang melambat seiring pertumbuhan ekonomi dunia yang melambat, di tengah impor yang tumbuh tinggi sejalan dengan kenaikan permintaan domestik. "+
							"<br/><br/>Ekspansi perekonomian dari sisi lapangan usaha dipengaruhi oleh sektor sekunder dan sektor tersier. Sejalan dengan konsumsi dan aktivitas impor barang yang tumbuh kuat, kinerja lapangan usaha (LU) perdagangan besar dan eceran tumbuh tinggi. Peningkatan belanja pemerintah termasuk belanja yang terkait anggaran pendidikan mendorong pertumbuhan LU jasa administrasi pemerintahan dan LU jasa pendidikan. Kinerja LU konstruksi juga tumbuh kuat sejalan dengan percepatan penyelesaian pembangunan proyek infrastruktur yang telah memasuki tahap akhir. Sementara itu, kinerja LU industri pengolahan sebagai sektor dengan pangsa terbesar terhadap produk domestik bruto (PDB), tumbuh stabil pada 2018."+
							"<br/><br/>Secara spasial, pertumbuhan ekonomi menguat di hampir seluruh wilayah. Perekonomian Jawa dan Sumatera tumbuh membaik, bahkan Maluku-Papua (Mapua) tumbuh lebih tinggi. Permintaan domestik yang kuat menjadi mesin utama pertumbuhan Jawa dan Sumatera. Pertumbuhan ekonomi Jawa yang kuat juga ditopang oleh membaiknya ekspor seiring dengan meningkatnya kinerja LU industri pengolahan. Perekonomian Mapua yang tumbuh tinggi dipengaruhi peningkatan kinerja ekspor tambang yang signifikan. Berbeda dengan kinerja ekspor di Mapua, perkembangan ekspor tambang di Kalimantan dan Bali-Nusa Tenggara (Bali-Nusra) menurun, sehingga berdampak pada laju pertumbuhan ekonomi yang melambat di kedua wilayah ini. Sementara itu, perlambatan pertumbuhan ekonomi di Sulawesi lebih dipengaruhi oleh melambatnya investasi. "+
							"<br/><br/>Keberlanjutan pemulihan ekonomi berpengaruh positif pada perbaikan kualitas pertumbuhan ekonomi. Berbagai indikator kesejahteraan masyarakat seperti tingkat pengangguran, kemiskinan, dan ketimpangan kembali menurun pada 2018. Perkembangan positif pasar ketenagakerjaan tercermin pada penurunan tingkat pengangguran terbuka (TPT) yang disertai dengan perbaikan tingkat partisipasi angkatan kerja (TPAK). Tingkat kemiskinan pada 2018 melanjutkan tren penurunan dan bahkan berada pada level terendah semenjak krisis ekonomi 1998. Indikator ketimpangan juga menunjukkan penurunan yang dipengaruhi oleh berbagai upaya pemerintah untuk menjaga daya beli dan pengeluaran pada masyarakat kelompok bawah di tengah daya beli dan pengeluaran kelompok 20% teratas yang menurun.",
					"class" : "indent"
				},
				{
					"title": "Bab 3 Neraca Pembayaran Indonesia",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=81",
					"desc": "Perekonomian global yang kurang kondusif di tengah pertumbuhan ekonomi domestik yang tetap kuat memberikan tantangan bagi pengelolaan neraca pembayaran Indonesia (NPI) 2018. Perekonomian global yang kurang menguntungkan, telah memberikan tekanan pada NPI, baik melalui jalur perdagangan maupun jalur finansial.  Tekanan mengemuka sejak awal tahun dan semakin kuat pada triwulan II dan III 2018. Dalam periode ini, defisit transaksi berjalan melebar didorong pertumbuhan impor yang tinggi akibat permintaan domestik yang kuat serta ekspor yang menurun akibat ekonomi dunia yang juga melambat. Aliran masuk modal asing juga menurun dipicu kenaikan Federal Funds Rate (FFR) dan ketidakpastian pasar keuangan global. Akibatnya, NPI pada tiga triwulan pertama 2018 tercatat defisit (Tabel 3.1). "+
							"<br/><br/>Bauran kebijakan yang tegas dan konsisten ditempuh Bank Indonesia, Pemerintah dan otoritas terkait lainnya, dapat memperkuat kembali kinerja NPI.  Pada triwulan IV 2018, NPI mencatat surplus didorong kenaikan aliran masuk modal asing yang tinggi dan penurunan impor. Aliran masuk modal asing meningkat pada triwulan IV 2018, sehingga dapat menutupi defisit transaksi berjalan yang masih tinggi. Defisit transaksi berjalan yang tinggi pada triwulan IV 2018 banyak dipengaruhi penurunan ekspor akibat pertumbuhan ekonomi dunia dan harga komoditas yang semakin melambat, sedangkan impor pada periode ini telah menurun sebagai dampak positif kebijakan yang ditempuh Bank Indonesia, Pemerintah, dan otoritas terkait. "+
							"<br/><br/>Respons kebijakan yang ditempuh juga dapat mengarahkan ketahanan eksternal tetap kuat. Di tengah tantangan yang mengemuka, perkembangan berbagai indikator ketahanan eksternal tetap baik, meskipun secara keseluruhan tahun 2018, NPI mencatat defisit. Defisit transaksi berjalan pada 2018 berada dalam level yang aman di bawah 3% dari PDB. Posisi cadangan devisa akhir 2018 juga tercatat tetap tinggi sebesar 120,7 miliar dolar AS, cukup untuk membiayai 6,7 bulan impor atau 6,5 bulan impor dan pembayaran utang luar negeri (ULN) pemerintah. Posisi ini juga berada di atas standar kecukupan internasional yakni sekitar 3 bulan impor. Ketahanan eksternal juga turut didukung <i>second line of defense</i> dalam bentuk jaring pengaman keuangan internasional (JPKI) yang memadai. Profil dan struktur ULN tetap aman dan terkendali ditunjang konsistensi kebijakan untuk mengoptimalkan peran ULN dalam mendukung pembiayaan ekonomi dan meminimalkan risiko yang dapat memengaruhi stabilitas perekonomian.",
					"class" : "indent"
				},
				{
					"title": "Bab 4 Inflasi dan Nilai Tukar",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=95",
					"desc": "Ketidakpastian global yang tinggi dan memberikan tekanan kepada neraca pembayaran Indonesia (NPI) banyak memengaruhi dinamika nilai tukar Rupiah pada 2018. Ketidakpastian tersebut dipicu oleh berlanjutnya kenaikan Federal Funds Rate (FFR) dan ketidakpastian pasar keuangan global. Kondisi ini mengakibatkan aliran masuk modal asing ke negara berkembang berkurang, termasuk Indonesia. Akibatnya, nilai tukar Rupiah mengalami tekanan sampai dengan Oktober 2018, dengan tekanan terbesar terjadi pada Juli 2018. Tekanan depresiasi terhadap Rupiah juga searah dengan pelemahan banyak mata uang negara berkembang lain, sejalan dengan dampak ketidakpastian global yang meningkat tersebut."+
							"<br/><br/>Bank Indonesia menempuh langkah antisipatif untuk menjaga stabilitas perekonomian, khususnya nilai tukar Rupiah. Sebagaimana disampaikan secara lengkap pada Bab 5, kebijakan moneter ditempuh secara <i>pre-emptive, front loading,</i> dan <i>ahead of the curve</i> guna menjaga daya tarik aset pasar keuangan Indonesia dan mengendalikan defisit transaksi berjalan berada pada level yang sehat. Suku bunga kebijakan, Bank Indonesia 7-<i>Day (Reverse) Repo Rate</i> (BI7DRR), naik 175 <i>basis points</i> (bps) sepanjang 2018. Kebijakan nilai tukar juga ditempuh untuk menjaga stabilitas nilai tukar sesuai nilai fundamentalnya, dengan tetap mendorong mekanisme pasar. Kebijakan nilai tukar turut didukung oleh inisiatif pendalaman pasar keuangan termasuk pemberlakuan transaksi <i>domestic non-deliverable forward</i> (DNDF) mulai 1 November 2018, yang secara tidak langsung memengaruhi pergerakan nilai tukar Rupiah menjadi lebih stabil. Kebijakan nilai tukar ditopang pula upaya untuk menjaga kecukupan likuiditas di pasar valas domestik sehingga meminimalkan risiko lanjutan kepada nilai tukar Rupiah. Terakhir, Bank Indonesia terus memperkuat koordinasi dengan Pemerintah dan otoritas terkait dan mendukung serangkaian kebijakan Pemerintah dan Otoritas Jasa Keuangan (OJK) untuk pengendalian defisit transaksi berjalan melalui peningkatan ekspor dan pengendalian impor. "+
							"<br/><br/>Respons kebijakan yang ditempuh dalam perkembangannya mendukung terkendalinya nilai tukar Rupiah pada triwulan IV 2018. Aliran masuk modal asing kembali meningkat pada triwulan IV 2018 sejalan dengan <i>interest rate differential</i> yang tetap menarik dan prospek perekonomian domestik yang stabil. Impor juga mulai melambat sejalan dengan dampak penyesuaian ekonomi terhadap nilai tukar yang bergerak fleksibel. Perkembangan ini pada gilirannya mendorong NPI triwulan IV 2018 mencatat surplus dan akhirnya mendorong Rupiah kembali dalam tren menguat. Secara keseluruhan tahun, Rupiah pada 2018 secara rerata melemah 6,05% (yoy), lebih rendah dibandingkan dengan pelemahan mata uang lain dan diikuti dengan volatilitas yang lebih terkendali."+
							"<br/><br/>Di tengah kondisi meningkatnya tekanan terhadap nilai tukar Rupiah, inflasi 2018 tetap rendah dan terkendali dalam sasaran 3,5&plusmn;1%. Inflasi indeks harga konsumen (IHK) pada akhir 2018 tercatat 3,13% (yoy), sehingga dalam 4 tahun berturut-turut berada dalam kisaran sasaran. Di satu sisi, faktor siklikal seperti harga komoditas pangan global yang menurun dan permintaan yang terkendali memengaruhi tekanan inflasi yang terus menurun (Diagram 4.1). Di sisi lain, perbaikan struktural karakter inflasi Indonesia juga berpengaruh positif, seperti kebijakan moneter yang konsisten, struktur pasar yang semakin kompetitif, serta distribusi dan logistik barang yang lebih lancar. Selain itu, koordinasi dengan Pemerintah Pusat dan Daerah yang semakin erat juga berkontribusi pada perbaikan karakter inflasi tersebut. Perbaikan struktur inflasi pada gilirannya memengaruhi perilaku inflasi seperti ekspektasi yang makin rendah, dampak lanjutan kenaikan inflasi <i>volatile food</i> (VF) dan <i>administered prices</i> (AP) terhadap inflasi yang semakin rendah, serta dampak pelemahan kurs terhadap inflasi yang menurun.",
					"class" : "indent"
				},
				{
					"title": "Bab 5 Kebijakan Moneter",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=113",
					"desc": "Kebijakan moneter difokuskan untuk menjaga stabilitas perekonomian, khususnya nilai tukar, di tengah kondisi ketidakpastian perekonomian global yang meningkat. Perkembangan sampai triwulan III 2018 menunjukkan kenaikan Federal Funds Rate (FFR) di AS dan ketidakpastian pasar keuangan global telah menurunkan aliran masuk modal asing ke negara berkembang, termasuk Indonesia. Kondisi ini memberikan tantangan bagi kebijakan moneter di negara dengan perekonomian terbuka. Bersamaan dengan defisit transaksi berjalan yang melebar sejalan permintaan domestik yang tetap solid, aliran masuk modal asing yang berkurang pada gilirannya menurunkan kinerja neraca pembayaran Indonesia (NPI) dan meningkatkan tekanan kepada nilai tukar Rupiah. Tantangan ini terutama terlihat pada triwulan II dan III 2018, sehingga perlu direspons dengan segera karena berisiko mengganggu stabilitas perekonomian dan sistem keuangan serta momentum pemulihan ekonomi."+
							"<br/><br/>Berbagai strategi kebijakan moneter dioptimalkan untuk mendukung arah kebijakan tersebut. Strategi ditujukan untuk mempertahankan daya tarik pasar keuangan domestik dan mengendalikan defisit transaksi berjalan dalam batas yang aman. Suku bunga kebijakan, Bank Indonesia 7<i>-Day (Reverse) Repo Rate</i> (BI7DRR), dinaikkan 175 <i>basis points</i> (bps) sebagai langkah <i>pre-emptive, front loading,</i> dan <i>ahead of the curve</i> dari kebijakan moneter untuk menjaga daya tarik pasar keuangan domestik. Langkah terukur ini ditempuh untuk mengendalikan nilai tukar Rupiah, di samping tetap konsisten dengan upaya menjaga inflasi 2018-2019 agar terkendali sesuai sasaran 3,5&plusmn;1%. Kebijakan nilai tukar juga ditempuh untuk menjaga stabilitas nilai tukar sesuai nilai fundamentalnya, dengan tetap mendorong mekanisme pasar.  Bank Indonesia juga memperkuat strategi operasi moneter guna menjaga kecukupan likuiditas pasar uang dan perbankan, yang menurun sejalan dampak aliran masuk modal asing yang berkurang. Upaya memperkuat jaring pengamanan keuangan internasional (JPKI) turut ditempuh guna meningkatkan ketahanan sektor eksternal. Terakhir, koordinasi dengan Pemerintah dan otoritas terkait tetap dipererat guna meningkatkan efektivitas kebijakan moneter dalam menjaga stabilitas perekonomian."+
							"<br/><br/>Respons kebijakan moneter serta bauran kebijakan yang ditempuh Bank Indonesia dan Pemerintah dalam perkembangannya dapat kembali memperkuat ketahanan eksternal, mengendalikan stabilitas perekonomian, dan menjaga momentum pertumbuhan ekonomi. Pada triwulan IV 2018, aliran masuk modal asing kembali meningkat dipengaruhi daya tarik aset keuangan domestik yang tinggi, stabilitas perekonomian yang terjaga, dan prospek perekonomian domestik yang tetap positif. Respons kebijakan juga mulai berdampak pada pengendalian impor, sehingga bersamaan dengan peningkatan aliran masuk modal asing turut mendorong Rupiah dalam tren menguat pada triwulan IV 2018. Sementara itu, inflasi 2018 terkendali sesuai dengan sasaran inflasi 3,5&plusmn;1% dan mendukung pertumbuhan ekonomi tetap kuat. Perkembangan positif tersebut tidak terlepas dari transmisi kebijakan moneter yang berjalan baik dan stabilitas sistem keuangan yang terkendali. ",
					"class" : "indent"
				},
				{
					"title": "Bab 6 Kebijakan Pendalaman Pasar Keuangan",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=129",
					"desc": "Kebijakan pendalaman pasar keuangan diarahkan pada upaya peningkatan peran pasar keuangan dalam mendukung kesinambungan pertumbuhan ekonomi. Hal ini ditempuh karena pasar keuangan yang dalam, likuid, efisien, inklusif, dan aman, akan dapat mendorong pasar keuangan berperan maksimal  dalam mendukung pembiayaan ekonomi. Dengan karakteristik pasar keuangan yang dalam dan likuid, maka alokasi modal akan lebih efisien sehingga dapat menjadi basis bagi pertambahan sumber pembiayaan ekonomi yang baru. Karakteristik pasar keuangan tersebut yang ditambah dengan inklusif dan aman, juga dapat meredam tekanan (<i>shocks</i>) bila terjadi gejolak di pasar keuangan. Secara keseluruhan, variasi instrumen pasar baik untuk pembiayaan maupun pengelolaan risiko dalam pembiayaan jangka panjang, serta investor yang beragam akan berkontribusi positif dalam memberikan alternatif sumber pembiayaan ekonomi. "+
							"<br/><br/>Bank Indonesia bersama Otoritas Jasa Keuangan (OJK) dan Kementerian Keuangan melalui Forum Koordinasi Pembiayaan Pembangunan melalui Pasar Keuangan (FK-PPPK) telah menyusun Strategi Nasional Pengembangan dan Pendalaman Pasar Keuangan (SN-PPPK) guna mempercepat pendalaman pasar keuangan.  Strategi nasional menjadi komitmen bersama ketiga otoritas untuk mengoptimalkan peran pasar keuangan sebagai sumber pembiayaan pembangunan. Selaras dengan SN-PPPK, kebijakan pendalaman pasar keuangan Bank Indonesia pada 2018 difokuskan pada upaya peningkatan efisiensi pasar uang dan pasar valas guna turut mendorong pembiayaan jangka panjang sebagai sumber pembiayaan ekonomi.  Beberapa strategi yang ditempuh ialah pengembangan instrumen untuk penguatan aktivitas penggunaan lindung nilai, pengelolaan likuiditas/sumber pendanaan jangka pendek, serta penguatan kredibilitas pasar. Kebijakan juga ditempuh untuk mendukung pengembangan investasi jangka panjang di pasar modal. Selain itu, penguatan peran pasar keuangan turut ditempuh melalui perluasan inovasi instrumen untuk pembiayaan proyek infrastruktur. Strategi kebijakan Bank Indonesia tersebut senantiasa dikoordinasikan dengan OJK dan Kementerian Keuangan dalam FK-PPPK. "+
							"<br/><br/>Kebijakan pendalaman pasar keuangan yang ditempuh berdampak positif pada perkembangan pasar keuangan di 2018. Di pasar valas, berbagai upaya sosialisasi telah berkontribusi pada peningkatan volume transaksi derivatif di pasar valas dalam rangka lindung nilai terhadap risiko nilai tukar. Kinerja positif pasar valas juga disertai dengan efisiensi pasar valas yang tetap terjaga, sebagaimana tercermin dari <i>bid-ask spread</i> transaksi <i>spot</i> dolar Amerika Serikat (AS) terhadap Rupiah yang  berada dalam level rendah dan volume transaksi yang cukup tinggi.  Sementara di pasar uang, perkembangan pasar repo dapat mendukung pengelolaan likuiditas Rupiah di jangka waktu yang lebih panjang. Terkait dukungan terhadap pembiayaan infrastruktur, koordinasi Bank Indonesia melalui FK-PPPK bekerja sama dengan Kementerian Badan Usaha Milik Negara (BUMN) berhasil mendorong tercapainya kesepakatan pembiayaan proyek infrastruktur strategis. Kesepakatan pembiayaan proyek infrastruktur strategis senilai 13,6 miliar dolar AS ditandatangani pada Oktober 2018.",
					"class" : "indent"
				},
				{
					"title": "Bab 7 Kebijakan Makroprudensial",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=147",
					"desc": "Bank Indonesia menempuh kebijakan makroprudensial yang akomodatif dengan didukung akses likuiditas yang lebih luas dan permodalan yang memadai. Kebijakan makroprudensial akomodatif ditempuh dengan mempertimbangkan siklus finansial yang berada di bawah pola jangka panjang. Kebijakan ini pada gilirannya ditujukan untuk mendorong fungsi intermediasi perbankan dan menopang momentum pemulihan ekonomi. Arah kebijakan makroprudensial ditempuh dengan tetap mempertimbangkan stabilitas sistem keuangan, termasuk dengan terus mencermati berbagai risiko ketidakpastian global yang meningkat."+
							"<br/><br/>Arah kebijakan makroprudensial ditempuh melalui berbagai piranti. Rasio <i>Loan to Value</i> atau <i>Financing to Value </i>(LTV/FTV) untuk Kredit Pemilikan Rumah (KPR) dilonggarkan guna mendorong pertumbuhan melalui sektor properti yang mempunyai dampak pengganda besar bagi perekonomian. Peran usaha mikro kecil dan menengah (UMKM) dalam menggerakkan perekonomian juga makin didorong melalui peningkatan target rasio kredit UMKM dari 15% menjadi 20% pada 2018. Pelonggaran juga dilakukan dengan mengimplementasikan ketentuan Rasio Intermediasi Makroprudensial (RIM), yang memperluas cakupan intermediasi dengan memasukkan pembelian surat-surat berharga, sehingga bank lebih leluasa dalam menyalurkan pembiayaan di luar pembiayaan konvensional dalam bentuk kredit. Bank Indonesia juga melakukan pelonggaran kebijakan Penyangga Likuiditas Makroprudensial (PLM) dengan memberikan fleksibilitas pengelolaan likuiditas yang lebih tinggi bagi bank untuk me-repo-kan surat-surat berharga (SSB) yang dimiliki kepada Bank Indonesia, dari 2% menjadi 4% dari DPK Rupiah. Sementara itu, untuk menyeimbangkan antara upaya mendorong intermediasi dan upaya memitigasi risiko, besaran <i>countercyclical capital buffer</i> (CCB) ditetapkan tidak berubah sebesar 0%."+
							"<br/><br/>Bank Indonesia melengkapi arah kebijakan makroprudensial tersebut dengan senantiasa memperkuat pengawasan makroprudensial, serta mempererat koordinasi dengan Pemerintah dan otoritas keuangan dalam rangka menjaga stabilitas sistem keuangan. Penguatan pengawasan difokuskan pada bank dan korporasi yang signifikan memengaruhi sistem keuangan. Sementara itu, penguatan koordinasi difokuskan pada sinergi kebijakan makroprudensial dan mikroprudensial, serta untuk pencegahan dan penanganan krisis. Di samping itu, Bank Indonesia juga berpartisipasi aktif dalam reformasi sektor keuangan global melalui keanggotaan dalam <i>Financial Stability Board</i> (FSB). "+
							"<br/><br/>Arah kebijakan makroprudensial yang ditempuh berdampak positif bagi meningkatnya intermediasi perbankan dan terjaganya stabilitas sistem keuangan. Kebijakan makroprudensial yang akomodatif berkontribusi pada peningkatan kredit perbankan yang tumbuh 11,8%, atau tertinggi dalam 4 tahun terakhir. Peningkatan kredit terutama disumbang oleh kredit yang mendukung proses produksi berupa kredit modal kerja dan dan kredit investasi yang meningkat 12,3%. Pencapaian tersebut menopang pembiayaan domestik untuk kegiatan ekonomi, di tengah penurunan pembiayaan nonbank dan pasar keuangan. Sementara itu, stabilitas sistem keuangan tetap terjaga dengan ketahanan perbankan yang tetap kuat, seperti rasio kecukupan modal atau <i>capital adequacy ratio</i> (CAR) yang tinggi dan <i>non performing loan</i> (NPL) yang rendah.",
					"class" : "indent"
				},
				{
					"title": "Bab 8 Kebijakan Sistem Pembayaran",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=161",
					"desc": "Kebijakan sistem pembayaran Bank Indonesia pada 2018 diarahkan untuk mendukung momentum pertumbuhan ekonomi dengan meningkatkan kelancaran, keamanan, dan efisiensi transaksi pembayaran. Dalam kaitan ini, kebijakan pada 2018 ditujukan untuk mendukung efisiensi dan efektivitas berbagai program pemerintah, termasuk program penyaluran program bantuan sosial. Selain itu, kebijakan 2018 juga diarahkan untuk mengantisipasi berbagai tantangan, sehingga sistem pembayaran dapat terus menopang kesinambungan pertumbuhan ekonomi. Tantangan pertama bersumber dari arus digitalisasi dan perkembangan teknologi yang pesat dan cepat, yang berpotensi mengubah lanskap sistem pembayaran nasional. Tantangan kedua berkaitan dengan pentingnya memperkuat ekosistem pembayaran nontunai di dalam negeri sehingga semakin efisien. Terakhir, menjaga ketersediaan uang layak edar di seluruh wilayah Indonesia secara merata, di tengah kondisi geografis Indonesia yang luas."+
							"<br/><br/>Sejalan dengan arah kebijakan, Bank Indonesia memperkuat strategi kebijakan sistem pembayaran baik sisi nontunai maupun sisi tunai. Di sisi nontunai, Bank Indonesia mendorong percepatan dan perluasan elektronifikasi pembayaran nontunai di berbagai area, seperti penyaluran program sosial pemerintah, pembayaran di sektor transportasi, dan pengelolaan transaksi keuangan Pemerintah Daerah. Bank Indonesia juga terus memperkuat ekosistem pembayaran dan keuangan digital melalui implementasi gerbang pembayaran nasional (GPN) dan pengembangan ekosistem teknologi finansial (tekfin), terutama di bidang sistem pembayaran. Di sisi tunai, Bank Indonesia terus berupaya untuk memperluas jangkauan layanan penyediaan uang layak edar ke seluruh wilayah Indonesia. Di tengah upaya mendukung kegiatan ekonomi tersebut, Bank Indonesia juga tetap memastikan aspek kehati-hatian dalam penyelenggaraan layanan sistem pembayaran. Kebijakan terakhir ini diwujudkan dengan memperkuat pengendalian risiko dan perlindungan terus konsumen."+
							"<br/><br/>Bank Indonesia terus memperkuat kerjasama dan koordinasi kelembagaan dalam rangka menjaga kelancaran dan keamanan sistem pembayaran nasional. Secara konsisten, Bank Indonesia memperkuat koordinasi dan perannya melalui berbagai fora di tingkat nasional dan internasional. Di tingkat nasional, koordinasi dilakukan dengan melibatkan pelaku industri dan otoritas terkait lainnya, termasuk dengan Pemerintah melalui kementerian/lembaga terkait. Sinergi dengan Pemerintah juga diperkuat dalam rangka memperluas akses masyarakat terhadap layanan keuangan (keuangan inklusif). Di tingkat internasional, Bank Indonesia terus berupaya memperkuat perannya di forum internasional, antara lain sebagai anggota Committee on Payments and Market Infrastructure (CPMI) dan observer di Financial Action Task Force (FATF). Hal tersebut penting untuk memastikan sistem pembayaran Indonesia yang berdasarkan standar internasional, sekaligus menopang kredibilitas.",
					"class" : "indent"
				},
				{
					"title": "Bab 9 Kebijakan Fiskal dan Reformasi Struktural",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=177",
					"desc": "Kebijakan fiskal 2018 difokuskan pada upaya memperkuat prospek kesinambungan fiskal, dengan tetap mengoptimalkan ruang untuk mendorong pertumbuhan ekonomi. Kebijakan ditempuh mempertimbangkan pentingnya ketahanan fiskal dalam menopang stabilitas perekonomian di tengah kondisi ketidakpastian global yang meningkat. Namun, Pemerintah tetap menjadikan anggaran pendapatan belanja negara/daerah (APBN/APBD) sebagai piranti kontrasiklikal kebijakan makroekonomi untuk menjaga momentum pemulihan ekonomi. Bersamaan dengan arah kebijakan ini, penguatan kebijakan struktural terus ditempuh guna meningkatkan kapasitas perekonomian, yang pada akhirnya bertujuan menopang stabilitas dan pertumbuhan ekonomi dalam jangka menengah."+
							"<br/><br/>Arah kebijakan ditempuh melalui strategi di tiap komponen APBN 2018. Dari sisi pendapatan negara, strategi difokuskan untuk meningkatkan penerimaan negara dari pajak dengan memanfaatkan basis data dan kepatuhan pajak yang makin meningkat. Dari sisi belanja negara, strategi diarahkan pada penajaman kualitas belanja dalam mendukung pertumbuhan ekonomi melalui program perlindungan sosial, subsidi yang tepat sasaran, dan penguatan desentralisasi fiskal untuk mengakselerasi pengurangan kemiskinan dan kesenjangan sosial. Sementara dari sisi pembiayaan, strategi pembiayaan ditempuh berhati-hati, efisien, seimbang dan produktif sehingga turut mendukung kesinambungan fiskal. Strategi kebijakan didukung oleh stimulus dari kebijakan fiskal daerah dan pembangunan proyek infrastruktur melalui berbagai skim pembiayaan. Reformasi struktural juga terus dilanjutkan melalui berbagai kebijakan struktural untuk memperkuat iklim usaha. "+
							"<br/><br/>Strategi yang ditempuh dapat memperkuat prospek kesinambungan fiskal, dengan tetap mendukung pertumbuhan ekonomi. Prospek kesinambungan fiskal membaik tergambar pada defisit keseimbangan primer 2018 yang menurun mencapai 1,86 miliar Rupiah atau 0,01% dari produk domestik bruto (PDB). Sejalan dengan itu, realisasi defisit APBN 2018 juga menurun menjadi 1,76% dari PDB. Rasio utang pemerintah terhadap PDB tetap pada level sehat di kisaran 30% pada 2018. Sementara itu, belanja untuk program perlindungan sosial dan stimulus fiskal daerah yang meningkat, serta pengeluaran untuk infrastruktur turut berkontribusi mendorong pertumbuhan ekonomi 2018.",
					"class" : "indent"
				},
				{
					"title": "Bab 10 Prospek dan Arah Kebijakan",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=197",
					"desc": "Prospek perekonomian Indonesia 2019 akan lebih baik, meskipun perekonomian global yang belum kondusif perlu terus mendapat perhatian. Momentum pertumbuhan ekonomi Indonesia berlanjut dalam kisaran 5,0%-5,4%, ditopang permintaan domestik yang kuat. Ketahanan eksternal juga makin kuat didukung defisit transaksi berjalan (TB) yang turun menjadi sekitar 2,5% dari produk domestik bruto (PDB), serta aliran masuk modal asing yang kembali meningkat. Stabilitas harga juga terkendali dimana inflasi diprakirakan dalam kisaran sasaran 3,5&plusmn;1%. Stabilitas sistem keuangan juga terjaga dan ditopang intermediasi yang membaik dengan kredit pada 2019 diprakirakan tumbuh sebesar 10%-12%."+
							"<br/><br/>Perekonomian domestik dalam jangka menengah diprakirakan berada dalam lintasan yang meningkat. Prospek ini sejalan dengan dampak positif berbagai reformasi struktural yang ditempuh yang diprakirakan dapat meningkatkan efisiensi perekonomian dan mendorong kenaikan kapasitas perekonomian. Struktur perekonomian juga lebih berdaya tahan serta ditopang sumber pembiayaan yang lebih permanen dan sehat. Prospek perbaikan struktur ini pada gilirannya dapat mendorong pertumbuhan ekonomi meningkat dalam kisaran 5,5%-6,1% pada 2024. Sejalan dengan kondisi tersebut, ketahanan eksternal makin baik tergambar pada defisit TB yang terus menurun dan inflasi yang makin rendah. "+
							"<br/><br/>Sinergi kebijakan antara Bank Indonesia, Pemerintah, Otoritas Jasa Keuangan (OJK), serta otoritas lain makin solid guna memperkuat prospek perekonomian Indonesia. Dalam kaitan ini, kebijakan moneter, kebijakan sektor keuangan, dan fiskal tetap diarahkan pada upaya menjaga stabilitas makroekonomi dan sektor keuangan, dengan tetap manfaatkan ruang yang tersedia untuk stimulus pertumbuhan ekonomi. Stimulus perekonomian tersebut termasuk mengoptimalkan peran kebijakan pendalaman pasar keuangan, kebijakan makroprudensial, kebijakan sistem pembayaran, serta ekonomi dan keuangan syariah. Stabilitas sistem keuangan juga diperkuat melalui koordinasi dan pengawasan yang erat antara Kementerian Keuangan, Bank Indonesia, OJK, dan Lembaga Penjamin Simpanan (LPS) dalam Komite Stabilitas Sistem Keuangan (KSSK), termasuk dalam pencegahan dan penanganan krisis keuangan."+
							"<br/><br/>Sinergi kebijakan juga ditempuh untuk konsisten melanjutkan reformasi struktural melalui empat strategi utama. Pertama, strategi meningkatkan daya saing perekonomian nasional. Upaya ini dilakukan melalui penguatan empat elemen dasar yakni ketersediaan infrastruktur, kualitas modal manusia (<i>human capital</i>), adopsi teknologi, dan dukungan kelembagaan. Kedua, strategi untuk mengembangkan kapasitas dan kapabilitas sektor industri. Ketiga, strategi mengoptimalkan pemanfaatan ekonomi digital. Terakhir, strategi untuk memperluas sumber pembiayaan ekonomi.",
					"class" : "indent"
				},
				{
					"title": "Lampiran",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=229",
					"desc": "<table id='lampiranTable' border='0'>"+
							"	<tr><th colspan='4' style='padding:0px 15px 0px 0px;'>Nomor</th><th colspan='8'>Judul</th></tr>"+
							"	<tr><td colspan='4'></td><td colspan='8'>Peraturan Bank Indonesia Tahun 2018</td></tr>"+
							"	<tr><td colspan='4'>Tabel 1</td><td colspan='8'>Produk Domestik Bruto Menurut Jenis Pengeluaran</td></tr>"+
							"	<tr><td colspan='4'>Tabel 2</td><td colspan='8'>Produk Domestik Bruto Menurut Lapangan Usaha (Harga Konstan)</td></tr>"+
							"	<tr><td colspan='4'>Tabel 3</td><td colspan='8'>Produk Domestik Bruto menurut Lapangan Usaha (Harga Berlaku)</td></tr>"+
							"	<tr><td colspan='4'>Tabel 4</td><td colspan='8'>Indeks Harga Konsumen Indonesia</td></tr>"+
							"	<tr><td colspan='4'>Tabel 5</td><td colspan='8'>Inflasi</td></tr>"+
							"	<tr><td colspan='4'>Tabel 6</td><td colspan='8'>Indeks Harga Perdagangan Besar Indonesia</td></tr>"+
							"	<tr><td colspan='4'>Tabel 7</td><td colspan='8'>Neraca Pembayaran Indonesia</td></tr>"+
							"	<tr><td colspan='4'>Tabel 8</td><td colspan='8'>Suku Bunga Deposito dalam Rupiah dan Valuta Asing menurut Kelompok Bank</td></tr>"+
							"	<tr><td colspan='4'>Tabel 9</td><td colspan='8'>Suku Bunga Kredit Rupiah Menurut Kelompok Bank</td></tr>"+
							"	<tr><td colspan='4'>Tabel 10</td><td colspan='8'>Perkembangan Jumlah Aliran Uang Kertas Melalui Kantor Pusat Bank Indonesia dan Kantor Perwakilan Dalam Negeri Bank Indonesia</td></tr>"+
							"	<tr><td colspan='4'></td><td colspan='8'>Daftar istilah</td></tr>"+
							"	<tr><td colspan='4'></td><td colspan='8'>Daftar Singkatan</td></tr>"+
							"</table>",
					"class" : ""
				},
				{
					"title": "Laporan Perekonomian Indonesia 2018",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/14_LPI2018.pdf#page=1",
					"desc": "",
					"class" : "indent"
				}
			]
		},
		"EN" : {
			"cover" : "cover2018.jpg",
			"title": "Synergy for Resilience and Growth",
			"prakata" : "While offering praise and thanksgiving to God the Almighty, I have the honor on behalf of the Board of Governors of Bank Indonesia to present this book, the 2018 Economic Report on Indonesia. This book provides a comprehensive evaluation of developments in the Indonesian economy, the policy responses chosen by Bank Indonesia over the course of 2018 and the economic outlook and direction of Bank Indonesia policy for 2019. The publication of this book is also a fulfillment of Bank Indonesia&#96;s accountability and transparency requirements under the Bank Indonesia Law.",
			"prakataLink" : "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=18",
			"content": [
				// {
				// 	"title": "Cover",
				// 	"link": "https://www.bi.go.id/en/publikasi/laporan-tahunan/perekonomian/Documents/Cover-2018.pdf",
				// 	"desc": "",
				// 	"class" : ""
				// },
				{
					"title": "General review",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=23",
					"desc": "In 2018, the Indonesian economy continued to perform strongly amid rising global uncertainty. The policy synergy forged by Bank Indonesia, the Government and relevant authorities safeguarded the country&#96;s economic resilience and sustained the momentum for economic growth. Looking ahead, the forecast is for improvement in the Indonesian economy, underpinned by a balanced and robust economic structure.",
					"class" : ""
				},
				{
					"title": "Chapter 1 Global Economy",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=41",
					"desc": "The global economy was characterized by increased uncertainty in 2018, prompted by three unfavorable developments. First, global economic growth slowed to 3.7% in 2018 from 3.8% in 2017. This was accompanied by a reduced world trade volume and lower international commodity prices. Second, the Federal Reserve raised the Federal Funds Rate (FFR) more aggressively than in 2107, thus triggering the risk of a sudden capital reversal from developing economies. Third, global financial market uncertainty has increased as an outcome of several factors: escalating trade tensions "+
							"between the United States and several of its trading partners, particularly China; simmering geopolitical risks such as the Brexit negotiations; and crises in a number of developing economies, including Argentina and Turkey. Together, these three factors compelled global investors to withdraw funds from developing economies and threatened to undermine external stability in the developing countries. Consequently, significant broad-based depreciation against the US dollar ensued, creating vulnerabilities to macroeconomic and financial system instability.",
					"class" : "indent"
				},
				{
					"title": "Chapter 2 Economic Growth",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=57",
					"desc": "Indonesia&#96;s economic recovery momentum continued in 2018. Growth accelerated to 5.17% in 2018 from 5.07% in 2017 (Chart 2.1), with the 2018 level the highest number on record since 2013. In general, Indonesia&#96;s domestic economic performance was indicative of a solid national economy, particularly considering the simultaneous downward trend tracked by the international economy as global uncertainty continued to increase.",
					"class" : "indent"
				},
				{
					"title": "Chapter 3 Balance of Payments",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=77",
					"desc": "Unfavorable global economic dynamics coupled with solid domestic economic fundamentals presented an onerous balance of payments (BoP) challenge in 2018. belom global economic conditions amplified pressure on the BoP through the trade and financial channels.  Pressures accumulated at the beginning of 2018 and escalated in the second and third quarters. During that period, the current account deficit widened on high import growth to meet solid domestic demand, while exports declined as a consequence of global economic slowdown. In addition, gradual Federal Funds Rate (FFR) hikes - together with financial market uncertainty - eroded foreign capital inflows. Consequently, Indonesia posted a BoP deficit in the first three quarters of the year (Table 3.1).",
					"class" : "indent"
				},
				{
					"title": "Chapter 4 Inflation and the Exchange Rate",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=91",
					"desc": "The heightened global uncertainties that put pressure on the Indonesia balance of payments (BoP) also strongly influenced rupiah exchange rate movement in 2018. This uncertainty was triggered by a series of increases in the Federal Funds Rate (FFR) and uncertainty on global financial markets. These conditions led to a lower foreign capital inflows in emerging economies, including Indonesia. As a result, until October 2018 the rupiah came under downward pressure, which peaked in July. Rupiah depreciation was in line with the weakening of most emerging market currencies, as global uncertainty escalated.",
					"class" : "indent"
				},
				{
					"title": "Chapter 5 Monetary Policy ",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=109",
					"desc": "Monetary policy focused in 2018 on safeguarding economic stability with emphasis on the exchange rate, amid growing uncertainty in the global economy. The significant events of the first three quarters of 2018 - the increases in the US Federal Funds Rate (FFR) and uncertainty on global financial markets - led to reduced inflows of foreign capital into emerging markets, including Indonesia. These developments were challenging for monetary policy in countries with open economies. At the same time as the current account deficit was widening in response to solid domestic demand, foreign capital inflows were in decline. In turn, this had a negative impact on the balance of payments (BoP) and exacerbated downward pressure on the rupiah. This challenge was particularly evident in the second and third quarters of 2018, necessitating an urgent response because of the risk to economic and financial system stability and the risk of loss of economic growth momentum.",
					"class" : "indent"
				},
				{
					"title": "Chapter 6 Financial Market Deepening Policy",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=125",
					"desc": "The aim of the financial market deepening policy is to expand the role of financial markets in supporting sustainable  economic growth. If a financial market is deep, liquid, efficient, inclusive and secure, its role in supporting economic activity will be maximized. A deep and liquid financial market will enable more efficient allocation of capital, and will serve as a basis for new sources of economic financing. And if financial markets are also inclusive and secure, this will cushion them against shocks in the event of upheavals. A greater variety of market instruments for financing and risk management in long-term financing, in addition to greater diversity of investors, will contribute positively to the provision of economic financing alternatives.",
					"class" : "indent"
				},
				{
					"title": "Chapter 7 Macroprudential Policy",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=143",
					"desc": "Bank Indonesia put in place accommodative macroprudential policies - having considered the current financial cycle that is below its long-term trend - and these were supported by wider access to liquidity and adequate capital. These policies were aimed at supporting the intermediation function of banks and stimulating economic growth. In determining Indonesia&#96;s macroprudential direction, Bank Indonesia continued to take into account financial system stability, and paid particular attention to risks arising from heightened global uncertainty.",
					"class" : "indent"
				},
				{
					"title": "Chapter 8 Payment System Policy",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=157",
					"desc": "In 2018, Bank Indonesia&#96;s payment system policy supported economic growth by improving the effectiveness, security and efficiency of transactions. The 2018 focus was on government programs, including the distribution of social assistance funds, and on anticipating challenges, thereby continuing to support sustainable economic growth. The first challenge stemmed from growing digitalization and rapid technological developments: these may change the landscape of the national payment system. The second challenge related to the importance of strengthening the country&#96;s non-cash payment ecosystem to make it more efficient. The final challenge pertained to keeping fit-for-circulation currency equally available in all regions of Indonesia, especially given the country&#96;s geographical vastness.",
					"class" : "indent"
				},
				{
					"title": "Chapter 9 Fiscal Policy and Structural Reform",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=171",
					"desc": "Fiscal policy direction in 2018 was focused on efforts to maintain fiscal sustainability, while continuing to create room for economic growth. This policy took into consideration the importance of fiscal resilience in maintaining economic stability amid heightened global uncertainty. The Government continued to view the state and regional budgets (APBN, APBD) as a countercyclical macroeconomic policy tool to maintain the momentum of economic recovery. In line with this, structural policies were strengthened further to increase economic capacity, which itself sustains stability and economic growth over the medium term.",
					"class" : "indent"
				},
				{
					"title": "Chapter 10 Economic Outlook and Policy Direction",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=191",
					"desc": "The Indonesian economy has an improved outlook for 2019 despite persistent unfavorable global economic conditions that require ongoing attention. Indonesia&#96;s economy is expected to maintain its momentum with growth in the range of 5.0% to 5.4%, supported by strong domestic demand. External resilience should strengthen on the back of a current account deficit that has fallen to around 2.5% of gross domestic product (GDP), and boosted by increased inflows of foreign capital. Price stability is also under control and inflation is predicted to be in the target range of 3.5&plusmn;1%. The stability of the financial system will also be maintained, supported by improved intermediation, with credit growth of 10% to 12% in 2019.",
					"class" : "indent"
				},
				{
					"title": "Appendices",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=223",
					"desc": "<table id='lampiranTable' border='0'>"+
							"	<tr><th colspan='4' style='padding:0px 15px 0px 0px;'>Nomor</th><th colspan='8'>Judul</th></tr>"+
							"	<tr><td colspan='4'></td><td colspan='8'>Bank Indonesia Regulations 2018</td></tr>"+
							"	<tr><td colspan='4'>Tabel 1</td><td colspan='8'>Gross Domestic Product by Expenditures</td></tr>"+
							"	<tr><td colspan='4'>Tabel 2</td><td colspan='8'>Gross Domestic Product by Industrial Origin at Constant Prices</td></tr>"+
							"	<tr><td colspan='4'>Tabel 3</td><td colspan='8'>Gross Domestic Product by Industrial Origin at Current Prices</td></tr>"+
							"	<tr><td colspan='4'>Tabel 4</td><td colspan='8'>Indonesia&#96;s Consumer Price Index</td></tr>"+
							"	<tr><td colspan='4'>Tabel 5</td><td colspan='8'>Inflation</td></tr>"+
							"	<tr><td colspan='4'>Tabel 6</td><td colspan='8'>Indonesia&#96;s Wholesale Price Index</td></tr>"+
							"	<tr><td colspan='4'>Tabel 7</td><td colspan='8'>Indonesia&#96;s Balance of Payments</td></tr>"+
							"	<tr><td colspan='4'>Tabel 8</td><td colspan='8'>Interest Rate on Time Deposits in Rupiah and Foreign Currency by Group of Banks</td></tr>"+
							"	<tr><td colspan='4'>Tabel 9</td><td colspan='8'>Interest Rates of Credit on Rupiah (IDR) on Rupiah (IDR) by Group of Banks</td></tr>"+
							"	<tr><td colspan='4'>Tabel 10</td><td colspan='8'>Flow of Bank Notes within through Bank Indonesia&#96;s Head Office and Regional Offices</td></tr>"+
							"	<tr><td colspan='4'></td><td colspan='8'>Glossary</td></tr>"+
							"	<tr><td colspan='4'></td><td colspan='8'>Abbreviations</td></tr>"+
							"</table>",
					"class" : ""
				},
				{
					"title": "Economic Report on Indonesia 2018",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/Economic-Report-on-Indonesia-2018.pdf#page=1",
					"desc": "",
					"class" : "indent"
				}
				
			]
		}
	},
	"2019": {
		"ID" : {
			"cover" : "cover2019.jpg",
			"title": "Sinergi, Transformasi, dan Inovasi menuju Indonesia maju",
			"prakata" : "Memasuki tahun kedua masa jabatan saya sebagai Gubernur Bank Indonesia, berbagai tantangan dari perkembangan ekonomi dunia terus menguat dan perlu disikapi dengan "+
						"respons yang tepat. Sejumlah pergeseran struktural dalam beberapa tahun terakhir bergerak makin cepat di 2019. Pergeseran dicirikan oleh kebijakan banyak negara yang "+
						"lebih berorientasi domestik dan volatilitas arus modal dunia yang meningkat. Perkembangan ini terlihat kuat pada 2019 yang membuat pertumbuhan ekonomi dunia melambat "+
						"dan ketidakpastian pasar keuangan tetap tinggi, terutama hingga triwulan III 2019. Pergeseran juga terjadi pada meningkatnya digitalisasi ekonomi-keuangan yang "+
						"berdampak pada berubahnya perilaku agen ekonomi. Dinamika ini tentu menimbulkan kompleksitas pengelolaan makroekonomi, yang berimplikasi pada pentingnya "+
						"menempuh strategi kebijakan yang tidak dapat hanya bertumpu pada satu kebijakan, namun perlu diperkuat oleh kebijakan lain dalam satu bauran kebijakan yang terintegrasi.",
			"prakataLink" : "https://www.bi.go.id/id/publikasi/laporan/Documents/9_LPI2019.pdf#page=16",
			"content": [
				// {
				// 	"title": "Cover",
				// 	"link": "https://www.bi.go.id/id/publikasi/laporan-tahunan/perekonomian/Documents/1_LPI2018_COVER-DAFTARISI-PRAKATA.pdf",
				// 	"desc": "",
				// 	"class" : ""
				// },
				{
					"title": "Tinjauan Umum",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/9_LPI2019.pdf#page=21",
					"desc": "Pergeseran struktural perekonomian global yang berdampak pada pelemahan pertumbuhan ekonomi dunia, "+
							"memberikan tantangan pada perekonomian domestik 2019. Pertumbuhan ekonomi 2019 tidak sekuat pertumbuhan "+
							"tahun sebelumnya, meskipun tetap berdaya tahan ditopang permintaan domestik yang baik dan stabilitas "+
							"yang terjaga. Perkembangan ini tidak terlepas dari hasil sinergi kebijakan Pemerintah, Bank Indonesia, "+
							"dan Otoritas terkait yang makin kuat. Dalam jangka menengah, perekonomian Indonesia diprakirakan "+
							"terus membaik, kendati prospek pertumbuhan ekonomi 2020 dapat tertahan dipengaruhi dampak meluasnya "+
							"Covid-19. Prospek jangka menengah yang kuat perlu terus didukung oleh sinergi antar pemangku kebijakan "+
							"sehingga dapat mempercepat transformasi ekonomi dan menumbuh-kembangkan inovasi, termasuk inovasi digital, "+
							"guna menuju Indonesia maju.",
					"class" : ""
				},
				{
					"title": "Bab 1 Perekonomian Terkini dan Prospek.",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/9_LPI2019.pdf#page=34",
					"desc": "Pergeseran perekonomian global yang berlanjut pada 2019 memberikan tantangan kepada upaya memperkuat kesinambungan pertumbuhan ekonomi "+
							"dunia. Kebijakan perdagangan yang berorientasi domestik dan risiko geopolitik yang naik di beberapa negara memicu ketidakpastian pasar "+
							"keuangan dunia dan menekan pertumbuhan ekonomi global 2019. Perkembangan ini berdampak kurang menguntungkan kepada perekonomian Indonesia "+
							"melalui jalur perdagangan dan memengaruhi jalur finansial pada paruh pertama 2019. Di tengah tantangan global tersebut, pertumbuhan "+
							"ekonomi Indonesia 2019 tetap berdaya tahan ditopang oleh permintaan domestik serta stabilitas perekonomian dan sistem keuangan yang "+
							"terjaga. Ke depan, Covid-19 yang merebak luas di dunia sejak awal 2020 diprakirakan menurunkan prospek pertumbuhan ekonomi Indonesia 2020. "+
							"Pertumbuhan ekonomi diprakirakan kembali meningkat pada 2021 dan berlanjut dalam jangka menengah-panjang ditopang oleh kebijakan "+
							"makroekonomi dan kebijakan struktural yang mempercepat transformasi ekonomi Indonesia menjadi negara maju.",
					"class" : "indent"
				},
				{
					"title": "Bab 2 Sinergi Kebijakan Ekonomi.",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/9_LPI2019.pdf#page=70",
					"desc": "Sinergi kebijakan ekonomi 2019 diarahkan untuk mendorong momentum pertumbuhan ekonomi, mempertahankan stabilitas, dan memperkuat struktur "+
							"perekonomian. Arah kebijakan ditempuh dengan mempertimbangkan kondisi pertumbuhan ekonomi dan kredit yang terindikasi berada di bawah lintasan optimum, "+
							"sedangkan stabilitas perekonomian tetap terkendali. Dalam kaitan ini, berbagai respons kebijakan telah ditempuh melalui peningkatan stimulus "+
							"fiskal oleh Pemerintah, implementasi bauran kebijakan yang akomodatif oleh Bank Indonesia, dan penguatan kebijakan struktural oleh para pengambil "+
							"kebijakan guna mendukung percepatan transformasi ekonomi menuju negara maju.",
					"class" : "indent"
				},
				{
					"title": "Bab 3 Bauran Kebijakan Bank Indonesia.",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/9_LPI2019.pdf#page=86",
					"desc": "Bank Indonesia menempuh bauran kebijakan yang akomodatif guna mendorong momentum pertumbuhan dan "+
							"mempertahankan stabilitas ekonomi. Arah kebijakan ditempuh sejalan dengan ruang yang dimiliki mempertimbangkan "+
							"stabilitas harga yang terjaga dengan inflasi yang menurun, stabilitas eksternal yang terkendali dengan "+
							"rata-rata nilai tukar Rupiah yang menguat, dan stabilitas sistem keuangan yang terpelihara baik. "+
							"Pemanfaatan ruang terbuka karena mendorong momentum pertumbuhan ekonomi dan meningkatkan pertumbuhan "+
							"kredit menuju level optimum, tanpa memberikan gangguan kepada stabilitas perekonomian. Bauran kebijakan "+
							"Bank Indonesia ditempuh melalui kebijakan moneter, kebijakan makroprudensial, kebijakan sistem pembayaran, "+
							"dan kebijakan pendukung lain.",
					"class" : "indent"
				},
				{
					"title": "Bab 4 Strategi Percepatan Transformasi Ekonomi.",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/9_LPI2019.pdf#page=104",
					"desc": "Berbagai kebijakan perlu terus ditempuh guna memperkuat struktur perekonomian dan mempercepat transformasi ekonomi sehingga membawa "+
							"Indonesia dalam kelompok negara maju dalam jangka menengah-panjang. Upaya melakukan transformasi ekonomi ditempuh melalui penguatan "+
							"beberapa sektor-sektor unggulan sebagai sumber pertumbuhan ekonomi baru, di antaranya sektor manufaktur, pariwisata, dan ekonomi "+
							"keuangan syariah. Transformasi ekonomi juga diperkuat dengan kebijakan pendalaman pasar keuangan sebagai basis dalam mendukung "+
							"sumber pembiayaan ekonomi.",
					"class" : "indent"
				},
				{
					"title": "Bab 5 Inovasi untuk Integrasi Ekonomi dan Keuangan Digital.",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/9_LPI2019.pdf#page=128",
					"desc": "Bank Indonesia menerbitkan Blueprint Sistem Pembayaran Indonesia (BSPI) 2025 sebagai strategi untuk mendorong integrasi ekonomi keuangan "+
							"digital nasional dan menjamin fungsi bank sentral dalam memelihara keutuhan proses peredaran uang, menjaga efektivitas kebijakan moneter dan "+
							"stabilitas sistem keuangan, serta mendukung inklusi ekonomi di era digital. BSPI 2025 diimplementasikan dengan memperkuat dan mengembangkan "+
							"infrastruktur pembayaran, mendorong keterbukaan dan infrastruktur publik atas data, serta memperkuat kerangka pengaturan, perizinan, dan pengawasan sistem pembayaran.",
					"class" : "indent"
				},
				{
					"title": "Lampiran",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/9_LPI2019.pdf#page=145",
					"desc": "",
					"class" : ""
				},
				{
					"title": "Laporan Perekonomian Indonesia 2019",
					"link": "https://www.bi.go.id/id/publikasi/laporan/Documents/9_LPI2019.pdf#page=1",
					"desc": "",
					"class" : "indent"
				}
			]
		},
		"EN" : {
			"cover" : "cover2019.jpg",
			"title": "Synergy, Transformation and Innovation towards an Advanced Indonesia",
			"prakata" : "Early in my second year as Governor of Bank Indonesia, the global economy was beset by various challenges which entailed appropriate policy responses. Several structural shifts in the global economic landscape have persisted and gained more momentum in 2019. Some structural shifts were reflected by increasingly domestic-oriented policies in many countries and rising volatility in global capital flows. The trends were seen in 2019 that contributing to the slower global economy growth and higher financial market uncertainty, especially up to the third quarter of 2019. Structural shift has also taken place in the form of increasingly digitalization of the economy and finance that has changed the behaviour of economic agents. Inevitably, these dynamics of the economy created complexities on macroeconomic management that emphasizes the authorities for not only rely on one policy instrument, but it need to be reinforced by other policy instruments within an integrated policy mix.",
			"prakataLink" : "https://www.bi.go.id/en/publikasi/laporan/Documents/9_LPI2019EN.pdf#page=16",
			"content": [
				// {
				// 	"title": "Cover",
				// 	"link": "https://www.bi.go.id/en/publikasi/laporan-tahunan/perekonomian/Documents/1_LPI2019_COVER-CONTENTS-FOREWORD.pdf",
				// 	"desc": "",
				// 	"class" : ""
				// },
				{
					"title": "Overview",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/9_LPI2019EN.pdf#page=21",
					"desc": "Structural shifts in the global economy, which have adversely impacted world economic growth, also posed challenges for the Indonesian economy in 2019. The 2019 Indonesia&#96;s economic growth was not as strong as the year before, but displayed resilience owing to brisk domestic demand and prudently managed stability. These developments represent the outcome of stronger policy synergy between the Government, Bank Indonesia and other relevant authorities. In the medium term, steady improvement is predicted for the Indonesian economy despite downward revisions to the 2020 growth outlook, due to the effects of the Covid-19. A strong medium-term outlook will require continued support from all parties working in synergy in order to accelerate economic transformation and foster innovation, including digital innovation, so as to pave the way for Indonesia to become an advanced country.",
					"class" : ""
				},
				{
					"title": "Chapter 1 Latest Economic Developments and Outlook",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/9_LPI2019EN.pdf#page=34",
					"desc": "An ongoing global economic shift, underway by 2019, challenged efforts to strengthen sustainable world economic growth. Inward-looking trade policies and build-up of geopolitical risks in several countries generated uncertainty in global financial markets and suppressed world economic growth in 2019. Such inauspicious developments spilled over to Indonesia&#96;s domestic economy through trade channels and impacted financial markets adversely until the third quarter of 2019. Notwithstanding these global challenges, resilient economic growth in Indonesia was preserved in 2019 on the back of solid domestic demand and continuing stability in the economic and financial system. Looking ahead, the Covid-19 outbreak that emerged at the beginning of 2020 is projected to undermine Indonesia&#96;s economic growth in 2020. Nevertheless, the economy is expected to regain upward momentum in 2021 and higher growth would persist in the medium- to long-term, supported by macroeconomic and structural policies to accelerate Indonesia&#96;s economic transformation towards the status of an advanced economy.",
					"class" : "indent"
				},
				{
					"title": "Chapter 2 Policy Synergy",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/9_LPI2019EN.pdf#page=70",
					"desc": "In 2019, policy synergy was oriented towards stimulating economic growth, maintaining financial stability and strengthening economic structure. The direction of policy took into account economic and credit growth conditions that were below their potential level amid managed economic stability. To that end, the policy responses have been conducted through increasing fiscal stimuli by the Government; an accommodative policy mix by Bank Indonesia; and structural policies to accelerate national economic transformation towards an advanced economy.",
					"class" : "indent"
				},
				{
					"title": "Chapter 3 Bank Indonesia&#96;s Policy Mix",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/9_LPI2019EN.pdf#page=86",
					"desc": "Bank Indonesia undertook an accommodative policy mix to support growth momentum and to safeguard economic stability. The policy direction took into account the room provided by several developments including low and stable inflation, managed external stability and well-maintained financial system stability. Through this policy mix, Bank Indonesia was well placed to boost economic growth and raise credit expansion towards an optimum level, without disturbing economic stability. Bank Indonesia&#96;s policy mix was pursued through monetary policy, macroprudential policy, payment system policy and other supporting policies.",
					"class" : "indent"
				},
				{
					"title": "Chapter 4 Strategy for Economic Transformation",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/9_LPI2019EN.pdf#page=104",
					"desc": "The continuation of structural reforms is essential for improving economic structure and accelerating the economic transformation for Indonesia to become an advanced economy in the long-term. Economic transformation is taking place by strengthening of the leading sectors as new sources of economic growth, including manufacturing, tourism and the sharia economy and finance. Reinforcing the economic transformation is supported by financial market deepening, to provide the basis for sources of economic financing.",
					"class" : "indent"
				},
				{
					"title": "Chapter 5 Innovation for Intergration of Digital Economy and Finance",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/9_LPI2019EN.pdf#page=128",
					"desc": "In the Indonesia Payment System Blueprint (IPSB) 2025, Bank Indonesia has published a strategy to promote integration of the national digital economy and finance; to safeguard the central bank functions of maintaining the integrity of money circulation process; to ensure effectiveness of monetary policy and financial system stability; and to support economic inclusion in the digital era. To implement the IPSB 2025, work is moving forward on strengthening and expanding payment infrastructure; promoting openness and public infrastructure for data; and strengthening the regulatory, licensing and supervisory framework for the payment system.",
					"class" : "indent"
				},
				{
					"title": "Appendices",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/9_LPI2019EN.pdf#page=145",
					"desc": "",
					"class" : ""
				},
				{
					"title": "Economic Report on Indonesia 2019",
					"link": "https://www.bi.go.id/en/publikasi/laporan/Documents/9_LPI2019EN.pdf#page=1",
					"desc": "",
					"class" : "indent"
				}
				
			]
		}
	},
	"2020": {
		"ID" : {
			"cover" : 	"cover2020.jpg",
			"title": 	"Bersinergi Membangun Optimisme Pemulihan Ekonomi",
			"prakata" : "Alhamdulillah, puji syukur kami panjatkan ke hadirat Allah, Tuhan Yang Mahakuasa, atas rahmat-Nya Bank Indonesia memublikasikan dua laporan akuntabilitas sekaligus, " + 
						"yaitu Laporan Perekonomian Indonesia (LPI) 2020 dan Laporan Tahunan Bank Indonesia (LTBI) 2020. Tahun ini, kami memulai tradisi baru, yang diawali Pertemuan Tahunan Bank Indonesia (PTBI) " + 
						"pada 3 Desember 2020 dan dilanjutkan dengan publikasi kedua laporan tersebut yang lebih awal yaitu pada bulan Januari. Publikasi kedua laporan tersebut sekaligus sebagai perwujudan " + 
						"dari komitmen kami yang tinggi untuk memperkuat akuntabilitas dan transparansi Bank Indonesia sebagaimana diamanatkan dalam UU Bank Indonesia. " +
						"Perekonomian 2020 menghadapi krisis luar biasa (<i>extraordinary</i>) yang belum pernah dialami sebelumnya. Krisis kali ini bersumber dari pandemi Covid-19 di Tiongkok yang menyebar " + 
						"dengan cepat ke seluruh dunia dan kemudian menimbulkan masalah kesehatan dan kemanusiaan yang besar. Pandemi Covid-19 dan langkah-langkah kebijakan untuk mengatasi kecepatan penyebarannya " + 
						"telah membatasi mobilitas masyarakat dan menyebabkan gelombang resesi ekonomi di banyak negara. Bahkan, pandemi ini juga sempat memicu kepanikan dan ketidakpastian pasar keuangan global sehingga " + 
						"meningkatkan kerentanan eksternal negara berkembang, termasuk Indonesia. Kompleksitas masalah yang ditimbulkan oleh pandemi Covid-19 tersebut memerlukan respons kebijakan yang segera dan luar biasa, " + 
						"baik dari sisi kesehatan maupun ekonomi dan keuangan. Sinergi kebijakan antarotoritas menjadi sangat penting untuk menyelaraskan berbagai langkah-langkah yang ditempuh guna menghindari krisis dan sekaligus berupaya mendorong pemulihan ekonomi. ",
			"prakataLink" : `${report2020pdflink}#page=18`,
			"content": [
				{
					"title": 	"Tinjauan Umum",
					"link": 	`${report2020pdflink}#page=22`,
					"desc" : 	"Pandemi <i>Corona Virus Disease</i> 2019 (Covid-19) berdampak signifikan pada banyak aspek kehidupan, tidak hanya kesehatan dan kemanusiaan, tetapi juga perekonomian dunia. " + 
								"Pertumbuhan ekonomi Indonesia 2020 mendapat tekanan cukup kuat, terutama pada semester I-2020, sejalan dampak perlambatan ekonomi dunia akibat Covid-19 dan kebijakan Pembatasan Sosial Berskala Besar (PSBB) " + 
								"untuk memitigasi penyebaran Covid-19. Sinergi kebijakan antarotoritas melalui berbagai langkah penguatan segera dan luar biasa untuk mengatasi dampak Covid-19, " + 
								"mampu mendorong perbaikan ekonomi secara bertahap pada semester II 2020 dengan stabilitas yang terjaga. Ke depan, prospek perekonomian Indonesia diprakirakan membaik pada 2021 " + 
								"didorong berlanjutnya sinergi kebijakan antarotoritas dan kembali pada lintasan meningkat dalam jangka menengah. " + 
								"Optimisme pemulihan ekonomi tersebut didukung berbagai upaya untuk mendorong percepatan transformasi struktural, termasuk akselerasi ekonomi dan keuangan digital, reformasi pasar uang, serta penguatan UMKM, " + 
								"dalam mendukung upaya menuju Indonesia maju.",
					"class" : ""
				},
				{
					"title": 	"Bab 1 Krisis Kemanusiaan Covid-19 dan Implikasinya pada Tatanan Perekonomian Global",
					"link": 	`${report2020pdflink}#page=40`,
					"desc": 	"Perekonomian global 2020 diwarnai oleh pandemi Covid-19 yang menimbulkan dampak luar biasa (<i>extraordinary</i>) terhadap kesehatan, kemanusiaan, ekonomi, dan stabilitas sistem keuangan. " + 
								"Upaya kesehatan untuk menanggulangi penyebaran Covid-19 telah menyebabkan terbatasnya mobilitas dan kegiatan ekonomi sehingga meningkatkan ketidakpastian pasar keuangan dan gelombang pertumbuhan ekonomi yang kontraktif di dunia. " + 
								"Ekonomi global terkontraksi dalam terutama pada semester I 2020, dan perlahan membaik pada semester II 2020, didorong oleh kemajuan penanganan Covid-19, peningkatan mobilitas, " + 
								"dan dampak stimulus kebijakan yang terintegratif dan bersinergi antar-otoritas maupun antarnegara. Covid-19 juga mengangkat tiga pelajaran penting di perekonomian global pada sistem perdagangan internasional, sistem moneter internasional, " + 
								"dan sistem keuangan dunia yang patut menjadi perhatian guna meningkatkan ketahanan ekonomi global ke depan.",
					"class" : 	"indent"
				},
				{
					"title": 	"Bab 2 Kinerja Perekonomian dan Sinergi Kebijakan Nasional di Periode Covid-19",
					"link": 	`${report2020pdflink}#page=61`,
					"desc": 	"Pandemi Covid-19 memberikan tekanan berat kepada Indonesia pada tahun 2020, tidak hanya kepada aspek kesehatan dan kemanusiaan, tapi juga aspek sosial dan ekonomi. " + 
								"Perekonomian dunia yang melambat serta kebijakan Pembatasan Sosial Berskala Besar untuk memitigasi penyebaran Covid-19 yang menurunkan mobilitas perekonomian, " + 
								"telah mengakibatkan kontraksi pertumbuhan ekonomi 2020. Pemerintah, Bank Indonesia, dan otoritas terkait memperkuat sinergi kebijakan guna memitigasi dampak luar biasa dari Covid-19 tersebut. " + 
								"Berbagai respons yang ditempuh secara bertahap dapat kembali meningkatkan pemulihan perekonomian pada semester II 2020 dan tetap menjaga stabilitas makroekonomi dan sistem keuangan, meskipun berbagai penguatan terus dilakukan.",
					"class" : 	"indent"
				},
				{
					"title": 	"Bab 3 Stimulus Kebijakan Bank Indonesia untuk Pemulihan",
					"link": 	`${report2020pdflink}#page=87`,
					"desc": 	"Bank Indonesia memperkuat bauran kebijakan guna memitigasi dampak pandemi Covid-19 terhadap pertumbuhan dan stabilitas ekonomi. " + 
								"Respons ditempuh melalui bauran kebijakan moneter yang akomodatif dengan menurunkan BI7DRR, melakukan injeksi likuiditas, memperkuat strategi operasi moneter, dan mengarahkan nilai tukar sesuai dengan level fundamental. " + 
								"Pelonggaran kebijakan makroprudensial dan penguatan kebijakan sistem pembayaran untuk akselerasi ekonomi dan keuangan digital, serta kebijakan pendukung lain juga dilakukan. " + 
								"Bank Indonesia juga terus memperkuat sinergi dengan Pemerintah dan otoritas terkait dalam menindaklanjuti seluruh kewenangan dalam Undang-Undang Nomor 2 Tahun 2020 sebagai bagian dari respons kebijakan nasional dalam kondisi kegentingan yang memaksa akibat pandemi Covid-19.",
					"class" : 	"indent"
				},
				{
					"title": 	"Bab 4 Optimisme Pemulihan Ekonomi",
					"link": 	`${report2020pdflink}#page=107`,
					"desc": 	"Pemulihan ekonomi Indonesia yang telah menguat pada semester II 2020 diprakirakan berlanjut pada 2021. " + 
								"Kemajuan penanganan Covid-19 termasuk penggunaan vaksin, pemulihan ekonomi global, stimulus kebijakan kebijakan makroekonomi, " + 
								"serta berbagai upaya penajaman strategi kebijakan mendukung optimisme penguatan ekonomi tersebut. " + 
								"Sinergi kebijakan antara Pemerintah, Bank Indonesia dan otoritas terkait yang terus diperkuat juga mendukung prospek pemulihan ekonomi nasional. " + 
								"Di jangka menengah, ekonomi Indonesia diprakirakan kembali dalam lintasan meningkat, didukung perbaikan ekonomi global dan peningkatan produktivitas domestik sebagai dampak reformasi struktural, " + 
								"termasuk percepatan digitalisasi ekonomi dan keuangan, serta penguatan UMKM.",
					"class" : 	"indent"
				},
				{
					"title": 	"Bab 5 Akselerasi Pendalaman Pasar Keuangan",
					"link": 	`${report2020pdflink}#page=132`,
					"desc": 	"Bank Indonesia menerbitkan <i>Blueprint</i> Pengembangan Pasar Uang 2025 (BPPU 2025) sebagai upaya mendorong percepatan tercapainya pasar keuangan yang likuid, efisien, " + 
								"dan dalam untuk mendukung stabilitas moneter dan sistem keuangan serta akselerasi pertumbuhan ekonomi nasional menuju Indonesia Maju. " + 
								"BPPU 2025 diimplementasikan dengan mendorong digitalisasi dan penguatan infrastuktur pasar keuangan, memperkuat efektivitas kebijakan moneter, " + 
								"dan mengembangkan sumber pembiayaan ekonomi dan pengelolaan risiko. Implementasi BPPU 2025 didukung oleh penguatan sinergi baik antar-insiatif di Bank Indonesia maupun antara Bank Indonesia dengan otoritas terkait serta pelaku di industri keuangan.",
					"class" : 	"indent"
				},
				{
					"title": 	"Bab 6 Transformasi UMKM untuk Pertumbuhan Ekonomi yang Inklusif",
					"link": 	`${report2020pdflink}#page=146`,
					"desc": 	"Berbagai kebijakan terus diperkuat untuk pengembangan Usaha Mikro, Kecil, dan Menengah (UMKM) yang memiliki peran strategis terhadap perekonomian melalui pilar korporatisasi, kapasitas, " + 
								"dan pembiayaan sehingga mendukung pertumbuhan ekonomi yang kuat dan inklusif. Upaya melakukan transformasi UMKM ditempuh melalui pemanfaatan digitalisasi untuk meningkatkan daya tahan yang lebih tinggi dan kapasitas yang lebih produktif dan inovatif. " + 
								"Kebijakan pengembangan UMKM juga didukung sinergi yang terus diperkuat antara Bank Indonesia dengan Pemerintah, lembaga keuangan, dan para penggiat usaha.",
					"class" : 	"indent"
				},
				{
					"title": 	"Lampiran",
					"link": 	`${report2020pdflink}#page=165`,
					"desc": 	"",
					"class" : 	""
				},
				{
					"title": 	"Laporan Perekonomian Indonesia 2020",
					"link": 	`${report2020pdflink}#page=1`,
					"desc": 	"",
					"class" : 	"indent"
				}
			]
		},
		"EN" : {
			"cover" : 	"cover2020.jpg",
			"title" : 	"Synergize to Build Optimism for Economic Recovery",
			"prakata" : "Let us offer our praises to God the Almighty, for by His grace and mercy Bank Indonesia has simultaneously published two reports of accountability, " + 
						"the 2020 Economic Report on Indonesia and the 2020 Bank Indonesia Annual Report. " + 
						"This year, we embarked on a new tradition beginning with the Bank Indonesia&#96;s Annual Meeting held on 3 December 2020 and continuing with the publication of both reports in 27 January 2021, " + 
						"earlier than in previous years. The publication of the two reports is also a fulfillment of our resolute commitment to strengthen accountability and transparency at Bank Indonesia as mandated in the Bank Indonesia Law. " + 
						"In 2020, the economy faced an extraordinary and unprecedented crisis. On this occasion, crisis originated with the Covid-19 pandemic in China and it rapidly spread worldwide, " + 
						"creating health and humanitarian problems on a massive scale. The Covid-19 pandemic and the policy actions intended to curb the rapid pace of its spread, " + 
						"led to restrictions on public mobility and set off a wave of economic recessions in many nations. That was not all. " + 
						"The pandemic also triggered panic and uncertainty on global financial markets, aggravating external vulnerabilities in emerging market nations, including Indonesia. " + 
						"The complexity of problems brought on by the Covid-19 pandemic necessitated immediate and extraordinary policy responses in health, the economy and finance. " + 
						"Interagency policy synergy took on a crucial role in harmonizing the various actions taken to avoid crisis and simultaneously to promote economic recovery.",
			"prakataLink": `${report2020vEngPdfLink}#page=18`,
			"content": [
				{
					"title": 	"Overview",
					"link": 	`${report2020vEngPdfLink}#page=22`,
					"desc" : 	"The 2019 coronavirus disease (Covid-19) pandemic has significantly impacted many areas of life, not only in health and humanitarian concerns, but also the world economy. " + 
								"In 2020 and especially during the first half of the year, Indonesia&#96;s economic growth came under considerable pressure as a result of the world economic slowdown triggered by Covid-19 and the large-scale social restrictions (PSSB) imposed to mitigate Covid-19 transmission. " + 
								"Interagency policy synergies resulted in urgent and extraordinary measures to cushion the impact of Covid-19. These succeeded in bringing about a gradual recovery in the economy during the second half of 2020, while maintaining stability. " + 
								"Looking forward, the outlook for the Indonesian economy is predicted to improve further in 2021, bolstered by strong interagency policies, and it would return to an upward path in the medium-term. " + 
								"This optimism for economic recovery is further supported by a range of measures to promote more rapid structural transformation, including acceleration of the digital economy and finance, reform of the money market and strengthening of MSMEs in support of progress towards an Advanced Indonesia.",
					"class" : ""
				},
				{
					"title": 	"Chapter 1 The Covid-19 Humanitarian Crisis And Its Implications For The World Economy",
					"link": 	`${report2020vEngPdfLink}#page=40`,
					"desc": 	"Developments in the global economy in 2020 were dominated by the Covid-19 pandemic which had an extraordinary impact on health, humanity, the economy and financial system stability. " + 
								"Healthcare efforts to break the chain of Covid-19 transmission severely restricted public mobility and economic activity, thus elevating financial market uncertainty and prompting a wave of economic contraction around the world. " + 
								"The global economic contraction was deepest during the first semester of 2020, followed by gradual improvements in the latter half of the year due to successful Covid-19 containment measures, increasing mobility as well as an integrated and synergic global policy response. " + 
								"This experience with Covid-19 has provided three invaluable lessons for the global economy in terms of the international trade system, international monetary system and global financial system. These demand attention in order to bolster global economic resilience moving forward.",
					"class" : 	"indent"
				},
				{
					"title": 	"Chapter 2 Economic Performance and National Policy Synergies during the Covid-19 Pandemic",
					"link": 	`${report2020vEngPdfLink}#page=61`,
					"desc": 	"The Covid-19 pandemic triggered intense pressures in Indonesia during 2020, not only from a health and humanitarian perspective, but also in terms of the socioeconomic impact. " + 
								"Global economic moderation and large-scale social restrictions to break the domestic chain of Covid-19 transmission, curbed economic mobility and contributed to an economic contraction in 2020. " + 
								"The Government, Bank Indonesia and other relevant authorities strengthened policy synergies to mitigate the extraordinary impact of Covid-19. " + 
								"The policy response, implemented gradually, paved the way for economic recovery in the second semester of 2020, while maintaining macroeconomic and financial system stability, despite various ongoing strengthening efforts.",
					"class" : 	"indent"
				},
				{
					"title": 	"Chapter 3 Bank Indonesia Policy Stimulus For Recovery",
					"link": 	`${report2020vEngPdfLink}#page=87`,
					"desc": 	"Bank Indonesia has strengthened its policy mix in order to mitigate the impact of Covid-19 on economic growth and stability. " + 
								"The policy response was instituted through an accommodative monetary policy mix, including policy rate (BI7DRR) reductions, liquidity injections, strengthening the monetary operations strategy and guiding the exchange rate towards the currency&#96;s fundamental value. " + 
								"Accommodative macroprudential policy was maintained along with efforts to strengthen payment system policy in order to accelerate the digital economy and finance, buttressed by other supporting policies. " + 
								"Bank Indonesia also continued to strengthen synergy with the Government and other relevant authorities in order to follow-up on all responsibilities in accordance with Act No. 2 of 2020 as part of the national policy response under the extraordinary conditions caused by the Covid-19 pandemic.",
					"class" : 	"indent"
				},
				{
					"title": 	"Chapter 4 Economic Recovery Optimism",
					"link": 	`${report2020vEngPdfLink}#page=107`,
					"desc": 	"Indonesia&#96;s economic recovery, which began in the second half of 2020, is expected to gain momentum in 2021. " + 
								"Progress in handling Covid-19 including the use of vaccines, global economic recovery, macroeconomic policy stimulus and various efforts to sharpen policy strategies support an optimistic outlook on the economy. " + 
								"The continuation of policy synergies between the Government, Bank Indonesia and related authorities further supports the prospects for continued economic recovery. " + 
								"In the medium-term, the Indonesian economy is expected to resume its upward trajectory, supported by global economic improvements and increased domestic productivity stemming from the impact of structural reforms, " + 
								"including the acceleration of economic and financial digitalization and strengthening of MSMEs.",
					"class" : 	"indent"
				},
				{
					"title": 	"Chapter 5 Acceleration of Financial Market Deepening",
					"link": 	`${report2020vEngPdfLink}#page=132`,
					"desc": 	"Bank Indonesia issued the Blueprint for Money Market Development (BPPU) 2025 in an effort to accelerate the creation of a liquid, efficient and deep financial market. " + 
								"The aims were to support monetary and financial system stability and to accelerate national economic development. " + 
								"BPPU 2025 is being implemented by encouraging the digitalization and strengthening of financial market infrastructure, strengthening the effectiveness of monetary policy and developing sources of economic financing and risk management. " + 
								"Implementation of BPPU 2025 is supported by strengthening synergies whether within Bank Indonesia itself or between Bank Indonesia and the relevant authorities and players in the financial industry.",
					"class" : 	"indent"
				},
				{
					"title": 	"Chapter 6 MSME Transformation For Inclusive Economic Growth",
					"link": 	`${report2020vEngPdfLink}#page=146`,
					"desc": 	"Various policies continue to be strengthened for the development of Micro, Small and Medium Enterprises (MSMEs), " + 
								"which play a strategic role in the economy through the pillars of corporatization, capacity and financing and supporting strong, " + 
								"inclusive economic growth. Efforts to transform MSMEs are being pursued through the use of digitalization to increase resilience and via greater productivity and innovation. " + 
								"MSME development policy is also supported by synergies which continue to be strengthened between Bank Indonesia and the Government, financial institutions and business players.",
					"class" : 	"indent"
				},
				{
					"title": 	"Appendices",
					"link": 	`${report2020vEngPdfLink}#page=163`,
					"desc": 	"",
					"class" : 	""
				},
				{
					"title": 	"Economic Report on Indonesia 2020",
					"link": 	`${report2020vEngPdfLink}#page=1`,
					"desc": 	"",
					"class" : 	"indent"
				}
			]
		}
	},
  "2021": {
		"ID" : {
			"cover" : 	"cover2021.jpg",
			"title": 	"BANGKIT DAN OPTIMIS: SINERGI DAN INOVASI UNTUK PEMULIHAN EKONOMI",
			"prakata" : "Alhamdulillah, puji syukur kami panjatkan ke hadirat Allah, Tuhan Yang Maha Kuasa, atas rahmat-Nya Bank Indonesia dapat melanjutkan tradisi publikasi laporan transparansi dan akuntabilitas pada awal tahun, setelah pelaksanaan Pertemuan Tahunan Bank Indonesia (PTBI). Pada Januari 2022, Bank Indonesia memublikasikan 3 (tiga) laporan transparansi dan akuntabilitas sekaligus, yaitu Laporan Perekonomian Indonesia (LPI) 2021, Laporan Ekonomi dan Keuangan Syariah (LEKSI) 2021, dan Laporan Tahunan Bank Indonesia (LTBI) 2021, setelah pelaksanaan PTBI 2021 pada 24 November 2021. Publikasi ketiga laporan tersebut sebagai wujud komitmen tinggi kami untuk memperkuat transparansi dan akuntabilitas Bank Indonesia sebagaimana diamanatkan dalam Undang-Undang Bank Indonesia.<br/><br/>" +
                  "Kami memandang bahwa perbaikan ekonomi global pada 2021 terus berlanjut meski belum berimbang dengan pemulihan ekonomi di <i>Advanced Economies</i> (AEs) yang lebih cepat dibandingkan dengan ekonomi negara <i>Emerging Market and Developing Economies</i> (EMDEs) akibat perbedaan tingkat vaksinasi dan kemampuan stimulus kebijakan masing-masing negara. Pada 2021, pemulihan ekonomi global sempat tertahan seiring dengan merebaknya Covid-19 varian Delta pada triwulan II 2021. Lebih dari itu, varian Delta memiliki karakteristik yang sangat cepat menular dan lebih ganas dibandingkan dengan varian lainnya, sehingga berdampak signifikan pada pada kesehatan, kemanusiaan, dan perekonomian dunia. Sejalan dengan peningkatan penyebaran Covid-19 varian Delta, ketidakpastian pasar keuangan global masih berlanjut di tengah antisipasi pasar terhadap kebijakan <i>tapering</i> the Fed serta kekhawatiran tekanan inflasi yang berlangsung lebih lama.<br/><br/>",
			"prakataLink" : report_2021_ID_prakata,
			"content": [
				{
					"title": 	"Tinjauan Umum",
					"link": 	report_2021_ID_overview,
          "desc"  : "Perbaikan ekonomi global pada 2021 terus berlanjut meski tidak merata dengan ketidakpastian pasar keuangan yang berlanjut. Proses pemulihan ekonomi nasional juga terus berlangsung dengan stabilitas yang tetap terjaga, meski sempat tertahan pada triwulan III 2021 seiring dengan merebaknya varian Delta. Sinergi kebijakan yang erat dan kinerja perekonomian tahun 2021 menjadi dasar untuk semakin bangkit dan optimis akan pemulihan ekonomi Indonesia yang lebih baik pada 2022, didukung oleh satu kondisi prasyarat, yaitu sinergi kebijakan untuk akselerasi vaksinasi dan penanganan Covid-19 dengan pembukaan sektor-sektor ekonomi prioritas, serta 5 (lima) respons kebijakan sebagai kondisi yang diperlukan. Sejalan dengan hal tersebut, bauran kebijakan Bank Indonesia pada 2022 akan bersinergi dan menjadi bagian dari arah kebijakan ekonomi nasional untuk mengakselerasi pemulihan dan tetap menjaga stabilitas perekonomian. Penguatan sinergi dan inovasi tersebut didukung oleh percepatan reformasi struktural baik di sektor riil maupun akselerasi ekonomi dan keuangan digital nasional, serta transformasi bauran kebijakan Bank Indonesia, untuk memperkuat upaya menuju Indonesia Maju.",
					"class" : ""
				},
				{
					"title": 	"Bab 1 Kinerja dan Prospek Ekonomi Global: Pemulihan Belum Berimbang, Ketidakpastian Pasar Keuangan Berlanjut",
					"link": 	report_2021_ID_bab1,
					"desc"  : "Perbaikan ekonomi global pada 2021 terus berlanjut meski belum berimbang dengan pemulihan ekonomi di <i>Advanced Economies</i> (AEs) yang lebih cepat dibandingkan dengan ekonomi negara <i>Emerging Market and Developing Economies</i> (EMDEs) akibat perbedaan tingkat vaksinasi dan kemampuan stimulus kebijakan masing-masing negara. Ketidakpastian pasar keuangan global masih belanjut seiring dengan risiko yang masih mengemuka, antara lain terkait peningkatan penyebaran Covid-19 varian Delta, antisipasi pasar terhadap kebijakan penurunan stimulus (<i>tapering</i>) the Fed, serta kekhawatiran tekanan inflasi yang berlangsung lebih lama. Pandemi Covid-19 juga menimbulkan setidaknya 7 (tujuh) hal penting yang perlu diwaspadai dan diantisipasi dengan baik agar mendukung pemulihan ekonomi global yang diperkirakan berlanjut pada 2022. Koordinasi kebijakan internasional, termasuk agenda Presidensi Indonesia di G20 pada 2022, ditempuh untuk terus memperkuat pemulihan ekonomi global yang sedang berjalan.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 2 Kinerja dan Prospek Ekonomi Nasional: Proses Pemulihan Terus Berlangsung, Stabilitas Terjaga",
					"link": 	report_2021_ID_bab2,
					"desc"  : "Proses pemulihan perekonomian Indonesia pada tahun 2021 dipengaruhi oleh perkembangan pandemi Covid-19. Perbaikan ekonomi yang berlangsung sejak triwulan I 2021 terus berlanjut meski sempat tertahan oleh merebaknya Covid-19 varian Delta pada triwulan III 2021. Secara keseluruhan tahun 2021, ekonomi Indonesia diperkirakan membaik dan akan tumbuh lebih tinggi lagi pada 2022, disertai dengan nilai tukar yang stabil dan inflasi yang terkendali. Perbaikan kondisi ekonomi tersebut didukung oleh mobilitas yang terus meningkat sehubungan dengan semakin terkendalinya penyebaran Covid-19 dan adanya akselerasi vaksinasi. Pembukaan sektor-sektor ekonomi yang lebih luas, stimulus kebijakan yang berlanjut, dan tetap kuatnya kinerja ekspor juga menunjang prakiraan tersebut. Untuk itu, sinergi dan inovasi kebijakan ekonomi nasional perlu terus diperkuat untuk mendukung berlanjutnya proses pemulihan ekonomi ke depan.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 3 Bauran Kebijakan Bank Indonesia Tahun 2021: Mendorong Pemulihan Ekonomi Nasional, Menjaga Stabilitas",
					"link": 	report_2021_ID_bab3,
					"desc"  : "Sinergi kebijakan nasional terus diperkuat pada tahun 2021 untuk tetap menjaga stabilitas dan terus mendorong perbaikan ekonomi nasional. Kuatnya sinergi kebijakan ekonomi nasional antara Pemerintah, KSSK, dan Bank Indonesia dapat mendorong perbaikan ekonomi nasional dengan stabilitas makroekonomi dan sistem keuangan yang tetap terjaga. Koordinasi fiskal dan moneter semakin diperkuat melalui partisipasi Bank Indonesia dalam pendanaan APBN sebagai pelaksanaan UU No. 2 Tahun 2020. Untuk mendukung pemulihan ekonomi nasional, Bank Indonesia juga mengarahkan seluruh instrumen bauran kebijakan moneter, makroprudensial, dan sistem pembayaran, berkoordinasi erat dengan Pemerintah dan KSSK.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 4 Bangkit dan Optimis: Sinergi dan Inovasi untuk Pemulihan Ekonomi",
					"link": 	report_2021_ID_bab4,
					"desc"  : "Sinergi kebijakan yang erat dan kinerja perekonomian pada 2021 menjadi dasar untuk bangkit dan semakin optimis akan percepatan proses pemulihan ekonomi Indonesia pada 2022. Upaya pemulihan ekonomi tetap didasarkan pada kerangka sinergi kebijakan agar ekonomi kembali ke lintasan jangka panjangnya. Prospek ekonomi Indonesia pada 2022 akan semakin membaik sejalan dengan prakiraan peningkatan kinerja permintaan domestik dan perekonomian global. Stabilitas perekonomian diprakirakan tetap terjaga di tengah proses pemulihan perekonomian yang terus berlangsung. Prospek positif tersebut diperkuat dengan sinergi dan inovasi untuk menjaga momentum kebangkitan dan membangun optimisme pemulihan perekonomian nasional. Sinergi antara Bank Indonesia dengan Pemerintah Pusat dan Daerah, Komite Stabilitas Sistem Keuangan (KSSK), perbankan, dan dunia usaha akan terus diperkuat untuk meningkatkan kinerja perekonomian nasional yang berkesinambungan. Inovasi bauran kebijakan senantiasa diselaraskan dengan perkembangan kondisi global, domestik, serta kebijakan fiskal untuk mendukung berlanjutnya reformasi struktural perekonomian nasional sehingga dalam jangka menengah perekonomian terus meningkat dan kembali berada di lintasan menuju Indonesia Maju.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 5 Arah Bauran Kebijakan Bank Indonesia Tahun 2022: Mendorong Akselerasi Pemulihan Ekonomi, Menjaga Stabilitas",
					"link": 	report_2021_ID_bab5,
					"desc"  : "Bauran kebijakan Bank Indonesia pada 2022 akan bersinergi dan menjadi bagian dari arah kebijakan ekonomi nasional untuk mengakselerasi pemulihan dan tetap menjaga stabilitas perekonomian. Bauran kebijakan tersebut disusun berdasarkan perkembangan prospek ekonomi global dan merespons enam permasalahan yang menjadi agenda koordinasi kebijakan internasional dalam Presidensi Indonesia di G20 pada 2022. Terkait dengan hal ini, implementasi dari 5 (lima) instrumen kebijakan, yaitu: kebijakan moneter, kebijakan makroprudensial, digitalisasi sistem pembayaran, pendalaman pasar uang, serta ekonomi-keuangan inklusif dan hijau dalam bentuk bauran kebijakan memerlukan perhitungan, perencanaan, dan komunikasi yang baik. Sejalan dengan risiko meningkatnya tekanan instabilitas pasar keuangan global dari normalisasi kebijakan moneter the Fed dan sejumlah negara AEs, arah kebijakan moneter pada tahun 2022 akan lebih diarahkan untuk menjaga stabilitas (<i>pro-stability</i>), baik dalam aspek pencapaian sasaran inflasi dan stabilitas nilai tukar, maupun stabilitas makroekonomi dan sistem keuangan. Kebijakan makroprudensial, digitalisasi sistem pembayaran, pendalaman pasar uang, serta ekonomi-keuangan inklusif dan hijau akan terus diarahkan untuk mengakselerasi pemulihan ekonomi nasional (<i>pro-growth</i>). Arah kebijakan Bank Indonesia yang bersinergi dengan bauran kebijakan ekonomi nasional akan mendorong pertumbuhan ekonomi Indonesia untuk kembali berada di lintasan jangka menengah menuju Indonesia Maju.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 6 Transformasi Bauran Kebijakan dan Akselerasi Ekonomi Keuangan Digital",
					"link": 	report_2021_ID_bab6,
					"desc"  : "Transformasi bauran kebijakan Bank Indonesia merupakan perwujudan upaya menjadi bank sentral digital terdepan yang berkontribusi nyata terhadap perekonomian nasional dan terbaik di antara negara <i>emerging markets</i> untuk Indonesia Maju. Bank Indonesia melakukan penajaman arah strategis melalui rangkaian transformasi bauran kebijakan utama dan pendukung, termasuk penguatan kerangka operasi moneter, serta pendalaman pasar keuangan. Memasuki era peradaban baru digitalisasi ekonomi dan keuangan, Bank Indonesia juga bergerak cepat secara menyeluruh untuk melakukan akselerasi ekonomi dan keuangan digital yang inklusif dan efisien. Berbasiskan <i>Blueprint</i> Sistem Pembayaran Indonesia (BSPI) 2025, selama tahun 2021 Bank Indonesia berhasil menerbitkan paket kebijakan reformasi sistem pembayaran nasional yaitu reformasi regulasi, pengembangan dan implementasi BI-FAST sebagai infrastruktur sistem pembayaran ritel, dan pengembangan serta perluasan standar nasional sistem pembayaran QRIS (QR <i>Indonesian Standard</i>) dan SNAP (Standar Nasional <i>Open</i> API Pembayaran). Bank Indonesia juga mendorong penguatan UMKM melalui transformasi digital yang menyeluruh dan inklusif dilakukan di sepanjang rantai nilai untuk mendukung terciptanya ekosistem digital yang terintegrasi, serta selaras dengan pilar kebijakan pengembangan UMKM Bank Indonesia yaitu korporatisasi, kapasitas, dan pembiayaan.",
          "class" : 	"indent"
				},
				{
					"title": 	"Lampiran",
					"link": 	report_2021_ID_appendices,
					"desc": 	"",
					"class" : 	""
				},
				{
					"title": 	"Laporan Perekonomian Indonesia 2021",
					"link": 	report_2021_ID_full,
					"desc": 	"",
					"class" : 	"indent"
				}
			]
		},
		"EN" : {
			"cover" : 	"cover2021.jpg",
			"title" : 	"Economic Report on Indonesia 2021",
			"prakata" : "Praise be to Allah. Let us give thanks before the Almighty God, for by His grace, Bank Indonesia has been able to continue the tradition of publication of reports for transparency and accountability at the start of the year, following the Bank Indonesia Annual Meeting. In January 2022, Bank Indonesia simultaneously published three reports in support of transparency and accountability: the Economic Report on Indonesia 2021; the Sharia Economy and Finance Report 2021; and the Bank Indonesia Annual Report 2021, following the Bank Indonesia Annual Meeting on 24 November 2021. The publication of these three reports represents a fulfilment of our steadfast commitment to strengthening the transparency and accountability of Bank Indonesia as mandated in the Bank Indonesia Act. " + 
                  "From our standpoint, despite inequity in the gains achieved, the global economy saw further improvement in 2021. Economic recovery progressed more rapidly in advanced economies than in emerging markets and developing economies due to differences between individual nations in vaccination rates and capacity for policy stimulus. In 2021, global economic recovery plateaued temporarily in response to the spread of the Covid-19 Delta variant in the second quarter. The Delta variant, which is extremely contagious and causes more severe illness than other variants, had a significant impact on public health, human lives and the world economy. Given the wider spread of the Covid-19 Delta variant, uncertainties persisted in global financial markets amid market anticipation of a tapering policy by the US Fed and fears of prolonged inflationary pressure.",
      "prakataLink": report_2021_EN_prakata,
			"content": [
				{
					"title": 	"Overview",
					"link": 	report_2021_EN_overview,
					"desc"  : "In 2021, the global economy recorded further improvements despite an uneven performance across countries and lingering uncertainty on financial markets. Indonesia&#96;s economic recovery also progressed with prudently managed stability, despite the interruption in the third quarter of 2021 caused by the rapid spread of the Delta variant. Close policy synergy and the economy&#96;s performance in 2021 set the stage for greater optimism regarding a more robust recovery in the Indonesian economy in 2022. Driving this result was one policy prerequisite, namely accelerating the rate of vaccinations and tackling Covid-19, which formed the basis for re-opening priority sectors of the economy. Five other policy responses addressed certain necessary conditions, as discussed below. In a continuation of these policies, the Bank Indonesia policy mix in 2022 will form a key part of the national economic policy for an accelerated recovery and the maintenance of economic stability. This will be expedited by structural reforms involving both the real sector and more rapid development of the national digital economy and finance, alongside the transformation of Bank Indonesia policy mix, to reinforce ongoing efforts for building an Advanced Indonesia (Indonesia Maju).",
          "class" : ""
				},
				{
					"title": 	"Chapter 1 Global Economic Performance and Outlook: Divergent Recovery, Persistent Financial Market Uncertainty",
					"link": 	report_2021_EN_bab1,
					"desc"  : "Global economic improvements continued in 2021, despite divergent and asynchronous economic recoveries between Advanced Economies (AEs) and Emerging Markets and Developing Economies (EMDEs), owing to different access to vaccines and policy stimuli across jurisdictions. At the same time, global financial market uncertainty persisted in response to emerging risks, including transmission of the Delta variant; market anticipation of tapering by the Fed; and concerns stoked by lingering inflationary pressures. The Covid-19 pandemic has brought at least seven important aspects to the forefront, as discussed below. These demand vigilance and must be anticipated properly to support the global economic recovery, which is expected to continue in 2022. International policy coordination, including Indonesia&#96;s G20 Presidency agenda in 2022, aims to strengthen the ongoing global economic recovery.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 2 National Economic Performance and Outlook: The Recovery Process Continues, Stability is Maintained",
					"link": 	report_2021_EN_bab2,
					"desc"  : "The 2021 economic recovery in Indonesia was largely driven by Covid-19 pandemic developments. Ongoing economic improvements since the first quarter of 2021 have endured, yet have been restrained by the impact of the Delta outbreak in the third quarter of 2021. Overall, Indonesia&#96;s economy is projected to continue improving in 2021 before accelerating in 2022, accompanied by a stable exchange rate and controlled inflation. Stronger economic conditions will be supported by increasing factor mobility as Covid-19 transmission is brought under control in line with a faster vaccination rollout. The broader reopening of economic sectors, along with policy stimuli and solid export performance support such projections. To that end, national economic policy synergy and innovation must be strengthened to bolster the ongoing economic recovery.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 3 Bank Indonesia Policy Mix 2021: Encouraging National Economic Recovery, Maintaining Stability",
					"link": 	report_2021_EN_bab3,
					"desc"  : "National policy synergy was strengthened in 2021 to maintain stability and revive the national economy. Strong economic policy coordination between the Government, Financial System Stability Committee and Bank Indonesia helped the economic recovery, while maintaining macroeconomic and financial system stability. Fiscal and monetary policy cooperation was strengthened through Bank Indonesia&#96;s participation in funding the State Revenue and Expenditure Budget (APBN) in accordance with Act No. 2 of 2020. Furthermore, Bank Indonesia also oriented the full panoply of monetary, macroprudential and payment system policy mix instruments towards supporting the national economic recovery in close coordination with the Government and Financial System Stability Committee.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 4 Rise and be Optimistic: Synergy and Innovation for Economic Recovery",
					"link": 	report_2021_EN_bab4,
					"desc"  : "Effective policy synergy and improving economic performance in 2021 are good reasons to be more optimistic about an acceleration of Indonesia&#96;s economic recovery in 2022. Efforts to promote economic recovery will continue to be based on a framework of policy synergies so that the economy returns to its long-term trajectory. For 2022, Indonesia&#96;s economic prospects will continue to improve in line with stronger expected domestic demand and a pick-up in the global economy. Economic stability is predicted to be maintained as the economy recovers. This positive outlook is underpinned by synergy and innovation to maintain momentum and create optimism for the recovery of the national economy. Synergies among Bank Indonesia and the Central and Regional Governments, the Financial System Stability Committee (KSSK), the banking sector and the business world will continue to be strengthened to improve performance of the national economy in a sustainable manner. Furthermore, policy mix innovations are constantly aligned with developments globally, domestically and in regard to fiscal conditions in order to support continued structural reforms of the national economy so that the economy continues to improve over the medium term and is back on track towards the realisation of an Advanced Indonesia.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 5 Bank Indonesia Policy Mix Direction for 2022: Encouraging Acceleration of Economic Recovery, Maintaining Stability",
					"link": 	report_2021_EN_bab5,
					"desc"  : "Bank Indonesia&#96;s policy mix in 2022 will synergize and help guide national economic policy toward accelerating recovery and maintaining economic stability. The policy mix is based upon the global economic outlook and gives consideration to issues that are on the international policy coordination agenda in the Indonesian Presidency at the G20 in 2022. In this regard, implementation entails five policy instruments, namely: monetary policy; macroprudential policy; digitalization of the payment system; deepening of the money market; and creating an inclusive and green economy. These all require accurate analysis, good planning and effective communication. Beginning with monetary policy, external risks are critical, most importantly the risk of increasing global financial market instability pressures brought on by the normalization of monetary policy by the Fed and a number of Advanced Economies. In light of this possibility, monetary policy in 2022 will be directed more towards maintaining stability (pro-stability), in terms of achieving the inflation target; exchange rate stability; and macroeconomic and financial system stability. At the same time, macroprudential policies, digitalization of the payment system, deepening of the money market and creation of an inclusive and green economy will continue to be directed towards accelerating Indonesia&#96;s economic recovery (pro-growth). The direction of Bank Indonesia&#96;s policies in synergy with the national economic policy mix will help bring Indonesia&#96;s economic growth back to its medium-term trajectory, aiming at creating an Advanced Indonesia.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 6 Transformation of The Policy Mix and Acceleration of The Digital Economy and Finance",
					"link": 	report_2021_EN_bab6,
					"desc"  : "The transformation of Bank Indonesia&#96;s policy mix is a culmination of efforts to become a leading digital central bank that contributes significantly to the national economy and is the best among emerging market countries to create an Advanced Indonesia. Bank Indonesia has sharpened its strategic direction through a series of transformations of the main and supporting policy mix, including strengthening the monetary operating framework and deepening the financial markets. Entering the new era of economic and financial digitalization, Bank Indonesia is also moving quickly to accelerate the realization of an inclusive and efficient digital economy. Based on the Indonesian Payment System Blueprint (BSPI) 2025, Bank Indonesia issued a national payment system reform policy package in 2021, which comprises regulatory reform; development and implementation of BI-FAST as retail payment system infrastructure; and development and expansion of the national payment system QRIS (QR Indonesian Standard) and SNAP (National Standard for Open API Payments). Bank Indonesia is also encouraging the strengthening of MSMEs through a comprehensive and inclusive digital transformation carried out along the value chain to support the creation of an integrated digital ecosystem and in line with the pillars of Bank Indonesia&#96;s MSME development policy, namely corporatization, capacity and financing.",
          "class" : 	"indent"
				},
				{
					"title": 	"Appendices",
					"link": 	report_2021_EN_appendices,
					"desc": 	"",
					"class" : 	""
				},
				{
					"title": 	"Economic Report on Indonesia 2021",
					"link": 	report_2021_EN_full,
					"desc": 	"",
					"class" : 	"indent"
				}
			]
		}
	},
  "2022": {
    "ID" : {
			"cover" : "cover2022.jpg",
			"title": 	"SINERGI DAN INOVASI MEMPERKUAT KETAHANAN DAN KEBANGKITAN MENUJU INDONESIA MAJU",
			"prakata" : `Alhamdulillah, puji syukur kami panjatkan ke hadirat Allah <i>Subhanahu wa Ta'ala</i> (SWT), \n
                  Tuhan Yang Maha Kuasa, karena atas Rahmat-Nya Bank Indonesia dapat kembali mengukuhkan tradisi 
                  publikasi laporan transparansi dan akuntabilitas pada awal tahun. 
                  Pada Januari 2023, Bank Indonesia memublikasikan Laporan Perekonomian Indonesia (LPI) 2022 
                  sebagai wujud komitmen tinggi kami untuk memperkuat transparansi dan akuntabilitas Bank Indonesia 
                  seperti yang diamanatkan dalam UU No. 23 Tahun 1999 tentang Bank Indonesia sebagaimana telah beberapa kali diubah 
                  terakhir dengan UU No. 4 Tahun 2023 tentang Pengembangan dan Penguatan Sektor Keuangan. 
                  Pada kesempatan yang sama, Bank Indonesia juga meluncurkan Kajian Ekonomi dan Keuangan Syariah (KEKSI) 2022 
                  yang merupakan bagian dari dukungan nyata Bank Indonesia dalam pengembangan ekonomi dan keuangan syariah. 
                  Kedua publikasi ini sekaligus juga merupakan wujud komitmen kami untuk menjadi bank sentral kredibel yang 
                  didukung tata kelola yang baik.`,
			"prakataLink" : report_2022_EN_prakata,
			"content": [
        {
					"title": 	"Tinjauan Umum Sinergi dan Inovasi Memperkuat Ketahanan dan Kebangkitan Menuju Indonesia Maju",
					"link": 	report_2022_ID_overview,
          "desc"  : "Perekonomian global tahun 2022 kembali memburuk dipicu oleh ketegangan geopolitik dunia, yang berdampak pada meningkatnya risiko resesi dan inflasi yang tinggi. Sinergi dan inovasi kebijakan Bank Indonesia dengan Pemerintah dan Komite Stabilitas Sistem Keuangan dapat menjaga ketahanan ekonomi dari risiko global tersebut dan terus mendukung keberlanjutan pemulihan ekonomi nasional tahun 2022. Ke depan, bauran kebijakan Bank Indonesia dan sinergi yang erat dengan kebijakan ekonomi nasional terus diperkuat guna terus mendukung ketahanan ekonomi serta mempercepat pemulihan dan kebangkitan perekonomian. Prospek perekonomian Indonesia diprakirakan terus membaik dengan didukung oleh struktur yang berdaya tahan dalam jangka menengah sehingga dapat menopang transformasi Indonesia menjadi negara maju.",
					"class" : ""
				},
				{
					"title": 	"Bab 1 Kinerja dan Prospek Ekonomi Global: Memburuk dengan Risiko Resflasi",
					"link": 	report_2022_ID_bab1,
					"desc"  : "Ketegangan geopolitik dunia memperburuk fragmentasi dan prospek ekonomi serta meningkatkan ketidakpastian pasar keuangan global. Lima tantangan mengemuka yang secara umum telah menurunkan prospek perekonomian global, termasuk munculnya risiko resesi dan inflasi tinggi bila fragmentasi tersebut terus belanjut. Berbagai tantangan tersebut menuntut penguatan kerja sama internasional baik skala regional maupun multilateral sehingga dapat memitigasi risiko dengan segera dan kembali memperkuat pemulihan ekonomi global",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 2 Kinerja dan Prospek Ekonomi Nasional: Optimis dan Waspada",
					"link": 	report_2022_ID_bab2,
					"desc"  : "Sinergi kebijakan Bank Indonesia, Pemerintah, dan Komite Stabilitas Sistem Keuangan (KSSK) dapat menopang berlanjutnya proses pemulihan perekonomian nasional pada 2022, di tengah kondisi perekonomian global yang menurun. Pertumbuhan ekonomi pada 2022 diprakirakan bias ke atas dalam kisaran proyeksi Bank Indonesia pada 4,5-5,3% serta didukung stabilitas moneter dan stabilitas sistem keuangan yang tetap terjaga. Pertumbuhan ekonomi pada 2023 diprakirakan tetap kuat, meskipun sedikit melambat ke titik tengah kisaran 4,5-5,3% sejalan penurunan prospek pertumbuhan ekonomi dunia, sebelum kemudian meningkat kembali menjadi 4,7-5,5% pada 2024.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 3 Bauran Kebijakan Bank Indonesia Tahun 2022: Menjaga Stabilitas dan Momentum Pemulihan Ekonomi Nasional",
					"link": 	report_2022_ID_bab3,
					"desc"  : "Bank Indonesia menempuh bauran kebijakan dan memperkuat sinergi kebijakan dengan Pemerintah dan Komite Stabilitas Sistem Keuangan (KSSK) dalam kerangka bauran kebijakan nasional untuk mendorong akselerasi pemulihan ekonomi sekaligus menjaga stabilitas. Dalam kaitan ini, kebijakan moneter diarahkan untuk menjaga stabilitas (<i>pro-stability</i>), sedangkan empat instrumen lainnya, yakni kebijakan makroprudensial, digitalisasi sistem pembayaran, pendalaman pasar uang, serta ekonomi-keuangan inklusif dan hijau diarahkan untuk mengakselerasi pemulihan ekonomi nasional (<i>pro-growth</i>). Sinergi kebijakan tersebut dalam perkembangannnya mampu mendorong berlanjutnya momentum pertumbuhan dan menjaga stabilitas perekonomian Indonesia di tengah perkembangan ekonomi global yang kurang menguntungkan.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 4 Sinergi dan Inovasi Bauran Kebijakan Ekonomi Nasional: Memperkuat Ketahanan, Mendorong Kebangkitan",
					"link": 	report_2022_ID_bab4,
					"desc"  : "Sinergi dan inovasi bauran kebijakan makroekonomi dan stabilitas sistem keuangan terus ditingkatkan untuk memperkuat ketahanan, momentum pemulihan, dan kebangkitan perekonomian nasional. Koordinasi erat kebijakan fiskal Pemerintah dan kebijakan Bank Indonesia diperlukan untuk memastikan inflasi dapat segera kembali ke sasaran, nilai tukar Rupiah stabil, defisit APBN terkendali, dan stabilitas moneter tetap terjaga. Kebijakan transformasi sektor riil dan reformasi struktural terus diperkuat untuk meningkatkan kapasitas perekonomian dan mendukung kesinambungan pertumbuhan ekonomi dalam jangka menengah menuju Indonesia Maju.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 5 Arah Bauran Kebijakan Bank Indonesia Tahun 2023: Menjaga Stabilitas, Mendorong Akselerasi Pemulihan",
					"link": 	report_2022_ID_bab5,
					"desc"  : "Bauran kebijakan Bank Indonesia pada tahun 2023 terus diarahkan untuk memperkuat ketahanan, pemulihan, dan kebangkitan perekonomian dalam sinergi yang erat dengan kebijakan ekonomi nasional. Kebijakan moneter Bank Indonesia akan terus diarahkan menjaga stabilitas (<i>pro-stability</i>), sementara kebijakan makroprudensial, digitalisasi sistem pembayaran, pendalaman pasar uang, serta ekonomi-keuangan inklusif dan hijau akan terus diarahkan untuk mengakselerasi pemulihan ekonomi nasional (<i>pro-growth</i>). Sinergi bauran kebijakan Bank Indonesia dan kebijakan ekonomi nasional akan mendorong pertumbuhan ekonomi Indonesia berada di lintasan jangka menengah menuju Indonesia Maju.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 6 Presidensi G20 Indonesia: Sinergi Internasional Mendorong Pemulihan Ekonomi Global",
					"link": 	report_2022_ID_bab6,
					"desc"  : "Upaya untuk mendorong pemulihan ekonomi global yang berimbang di tengah berbagai tantangan memerlukan sinergi erat di tingkat global sehingga Presidensi G20 Indonesia 2022 mengangkat tema &#8220;<i>Recover Together, Recover Stronger</i>&#8221;. Presidensi G20 Indonesia memiliki 6 (enam) agenda utama yang menjadi fokus pembahasan di jalur keuangan, yaitu terkait kebijakan <i>exit strategy</i> pascapandemi, mengatasi <i>scarring effect</i> dari pandemi, inovasi sistem pembayaran di era digital, mendorong keuangan berkelanjutan, meningkatkan inklusi keuangan, serta perpajakan internasional. Presidensi G20 Indonesia telah berhasil mengeluarkan berbagai kesepakatan dan rekomendasi yang akan menjadi acuan perumusan kebijakan ke depan.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 7 Proyek Garuda: Menavigasi Arsitektur Rupiah Digital",
					"link": 	report_2022_ID_bab7,
					"desc"  : "Dinamika perkembangan uang pada era digital beserta tantangannya mendorong Bank Indonesia meninjau kembali kebijakannya. Rupiah Digital sebagai bentuk pengembangan CBDC Indonesia menjadi jalan keluar bagi Bank Indonesia untuk tetap dapat memenuhi misi kebijakan publiknya pada era digital. Peluncuran “Proyek Garuda” oleh Bank Indonesia menjadi proyek yang memayungi berbagai inisiatif eksplorasi atas pilihan-pilihan desain arsitektur Rupiah Digital. Mempertimbangkan bahwa Proyek Garuda merupakan sebuah inisiatif berskala nasional maka sinergi dengan berbagai pemangku kepentingan akan terus ditempuh guna memperkuat efektivitas kebijakan.",
          "class" : 	"indent"
				},
				{
					"title": 	"Lampiran",
					"link": 	report_2022_ID_appendices,
					"desc": 	"",
					"class" : 	""
				},
				{
					"title": 	"Laporan Perekonomian Indonesia 2022",
					"link": 	report_2022_ID_full,
					"desc": 	"",
					"class" : 	"indent"
				}
      ]
		},
    "EN" : {
			"cover" : "cover2022.jpg",
			"title": 	"SYNERGY AND INNOVATION STRENGTHENING RESILIENCE AND REVIVAL TOWARDS ADVANCED INDONESIA",
			"prakata" : `Praise be to Allah. Let us give thanks before the One and Almighty God for by His grace, Bank Indonesia has once again been able to uphold and strengthen the tradition for publication of reports for transparency and accountability at the start of the year. In January 2023, Bank Indonesia published the Economic Report on Indonesia 2022 as a product of our steadfast commitment for strengthening the transparency
                  and accountability of Bank Indonesia as mandated in Act No. 23 of 1999 concerning Bank Indonesia as last amended by Act No. 4 of 2023 concerning Development and Strengthening of the Financial Sector. On the same occasion, Bank Indonesia also launched the Sharia Economics and Finance Study 2022, which represents part of the tangible support provided by Bank Indonesia to the development of the sharia economy and finance. These two publications also represent the product of our commitment to be a central bank of utmost credibility, supported by good governance.`,
			"prakataLink" : report_2022_EN_prakata,
			"content": [
        {
					"title": 	"Overview",
					"link": 	report_2022_EN_overview,
          "desc"  : "The global economy experienced another downturn in 2022, triggered by global geopolitical tensions that increased recession risk and led to high inflation. Policy synergy and innovation between Bank Indonesia and the Government, under the auspices of the Financial System Stability Committee (KSSK), effectively maintained economic resilience against the global turmoil and sustained the momentum of national economic recovery in 2022. Moving forward, the Bank Indonesia policy mix and close synergy with national economic policy will continue to be strengthened, thus bolstering economic resilience and accelerating the economic recovery and revival. A promising national economic outlook is projected for Indonesia, supported by an economic structure that is resilient in the medium-long term, thereby strengthening Indonesia&#96;s transformation towards an advanced economy.",
					"class" : ""
				},
				{
					"title": 	"Chapter 1 Global Economy: Worsening with Recession/Inflation Risk",
					"link": 	report_2022_EN_bab1,
					"desc"  : "Global geopolitical tensions exacerbated economic fragmentation in 2022, dimming economic prospects and leading to greater uncertainty in global financial markets. Five main challenges emerged which have clouded the outlook for the global economy, including the risk of recession and high inflation, if such fragmentation continues. These various challenges require stronger international cooperation both on a regional and multilateral scale so that the risks can be immediately mitigated in order to help hasten global economic recovery.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 2 Domestic Economy: Cautiously Optimistic",
					"link": 	report_2022_EN_bab2,
					"desc"  : "The policy synergy between Bank Indonesia, the Government and the Financial System Stability Committee (KSSK) supported the continuation of the domestic economic recovery process in 2022, amid weakening global economic conditions. Economic growth in 2022 is predicted to have an upwards bias within the range of Bank Indonesia&#96;s projection of 4.5-5.3% and be supported by both monetary and financial system stability. Economic growth is predicted to remain strong in 2023, although it will slow slightly to the midpoint of the 4.5-5.3% range in line with the dimmer prospects for global economic growth, before increasing again to 4.7-5.5% in 2024.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 3 Bank Indonesia Policy Mix in 2022: Maintaining Stability and Economic Recovery Momentum",
					"link": 	report_2022_EN_bab3,
					"desc"  : "Bank Indonesia used a mix of its policy instruments--and strengthened policy synergy with the Government and Financial System Stability Committee (KSSK) within the national policy framework--to accelerate economic recovery and maintain stability. In this regard, monetary policy was oriented towards maintaining stability (pro-stability), while the four other instruments (namely macroprudential policy; payment system digitalisation; money market development; and the green and inclusive economy and finance) were oriented towards accelerating economic recovery (pro-growth). Such policy synergy successfully maintained growth momentum and economic stability in Indonesia despite global economic turmoil.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 4 Synergy and Innovation of the National Policy Mix: Strengthening Resilience, Encouraging Revival",
					"link": 	report_2022_EN_bab4,
					"desc"  : "The synergy and innovation of the macroeconomic policy mix and financial system stability are continuously enhanced to strengthen resilience, recovery momentum and revival of the economy. Close coordination between the Government&#96;s fiscal policy and Bank Indonesia&#96;s policies is needed to ensure that inflation can quickly return to its targeted level; the Rupiah exchange rate is stable; the State Budget deficit is under control; and monetary stability is maintained. Real sector transformation policies and structural reforms continue to be strengthened to increase economic capacity and support sustainable economic growth in the medium term towards achieving Indonesia Maju.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 5 Bank Indonesia Policy Mix Direction in 2023: Maintaining Stability, Accelerating Economic Recovery",
					"link": 	report_2022_EN_bab5,
					"desc"  : "The Bank Indonesia policy mix in 2023 will remain oriented towards strengthening economic resilience, recovery and revival in close synergy with national economic policy. BI monetary policy in 2023 will remain directed towards maintaining stability (pro-stability), while macroprudential policy, payment system digitalisation, money market development as well as the inclusive and green economy and finance will remain directed towards accelerating economic recovery (pro-growth). This BI policy mix synergized with national economic policy will stimulate economic growth on a medium-term path towards Indonesia Maju.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 6 Indonesia&#96;s G20 Presidency: Global Synergy Drives Economic Recovery",
					"link": 	report_2022_EN_bab6,
					"desc"  : "One important global agenda item carried out in 2022 to promote global economic recovery, is Indonesia&#96;s 2022 G20 Presidency, which has the theme &ldquo;Recover Together, Recover Stronger&rdquo;. Various agendas were discussed intensively in the Finance Track and the Sherpa Track. The implementation of Indonesia&#96;s G20 Presidency proceeded smoothly and resulted in joint communiques from all G20 members, even though, at the same time, geopolitical tensions were still high. The successful implementation of Indonesia&#96;s G20 Presidency owes much to the strategic role of strong synergy, both among stakeholders in Indonesia and coordination with member countries, in achieving the same goal of accelerating global economic recovery.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 7 The Project Garuda: Navigating the Digital Rupiah Architecture",
					"link": 	report_2022_EN_bab7,
					"desc"  : "The dynamics of money development in the digital era and its challenges have prompted Bank Indonesia to review its policies in this area. A Digital Rupiah is a way to develop Indonesia&#96;s CBDC while fulfilling Bank Indonesia&#96;s public policy mission in the digital era. The launch of the &ldquo;Project Garuda&rdquo; by Bank Indonesia is a project that covers various initiatives to explore architectural design options for the Digital Rupiah. Considering that the Project Garuda is an initiative on a national scale, synergies with various stakeholders will continue to be pursued to strengthen policy effectiveness.",
          "class" : 	"indent"
				},
				{
					"title": 	"Appendices",
					"link": 	report_2022_EN_appendices,
					"desc": 	"",
					"class" : 	""
				},
				{
					"title": 	"Indonesia Economic Report 2022",
					"link": 	report_2022_EN_full,
					"desc": 	"",
					"class" : 	"indent"
				}
      ]
		},
  },
  "2023": {
    "ID" : {
			"cover" : "cover2023.jpg",
			"title": 	"Sinergi Memperkuat Ketahanan dan Kebangkitan Ekonomi Nasional",
			"prakata" : ` Puji dan syukur kami panjatkan ke hadirat
      Allah <i>Subhanahu wa Ta&acute;ala</i> (SWT), Tuhan yang Mahakuasa, karena atas Rahmat-Nya Bank Indonesia dapat menyampaikan publikasi Laporan Perekonomian Indonesia (LPI) 2023 sebagai transparansi kebijakan Bank Indonesia kepada publik sebagaimana dimaksud dalam pasal 58 ayat (7) Undang-Undang No.23 Tahun 1999 tentang Bank Indonesia yang telah beberapa kali diubah terakhir dengan Undang-Undang
      No. 4 Tahun 2023 tentang Pengembangan dan Penguatan Sektor Keuangan.`,
			"prakataLink" : report_2024s_ID_prakata,
			"content": [
        {
					"title": 	"Tinjauan Umum Sinergi Memperkuat Ketahanan dan Kebangkitan Ekonomi Nasional",
					"link": 	report_2024s_ID_overview,
          "desc"  : "Pemulihan ekonomi Indonesia terus berlanjut dan stabilitas perekonomian tetap terjaga pada 2023, di tengah pertumbuhan ekonomi dunia yang menurun dan ketidakpastian pasar keuangan yang tinggi. Respons bauran kebijakan Bank Indonesia yang bersinergi dengan kebijakan ekonomi nasional menjadi kunci kinerja ekonomi Indonesia yang berdaya tahan tersebut. Bauran kebijakan Bank Indonesia akan terus diperkuat pada 2024, sehingga terus dapat menjaga stabilitas dan mendorong pertumbuhan ekonomi berkelanjutan. Bank Indonesia meyakini bauran dan sinergi kebijakan yang erat akan mampu memperkuat dan mendorong lebih lanjut kebangkitan ekonomi nasional menuju Indonesia Maju.",
					"class" : ""
				},
				{
					"title": 	"Bab 1 Kinerja dan Prospek Ekonomi Global: Pertumbuhan Melambat, Ketidakpastian Tinggi",
					"link": 	report_2024s_ID_bab1,
					"desc"  : "Dinamika ekonomi dunia yang berubah cepat dengan diikuti oleh meruncingnya ketegangan geopolitik memperburuk prospek ekonomi serta meningkatkan ketidakpastian pasar keuangan global. Hal ini ditandai dengan mengemukanya 5 (lima) tantangan yang secara umum telah menurunkan prospek perekonomian dunia, meningkatkan divergensi investasi dan perdagangan antara negara maju dan negara berkembang, serta mendorong makin tingginya ketidakpastian pasar keuangan global. Berbagai tantangan tersebut menuntut penguatan kerja sama internasional baik skala multilateral maupun regional untuk memitigasi risiko sedini mungkin dampak rambatannya pada ketahanan perekonomian dan memperkuat pemulihan ekonomi global.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 2 Kinerja dan Prospek Ekonomi Nasional: Stabilitas Tetap Terjaga, Pemulihan Berlanjut",
					"link": 	report_2024s_ID_bab2,
					"desc"  : "Sinergi respons bauran kebijakan ekonomi nasional yang prudent dan konsisten dapat menopang berlanjutnya pemulihan perekonomian nasional, di tengah perlambatan ekonomi global. Pertumbuhan ekonomi diprakirakan mencapai 4,5-5,3% pada 2023, dan akan meningkat menjadi 4,7-5,5% pada 2024 didukung stabilitas yang tetap terjaga. Inflasi turun lebih cepat dan terkendali dalam kisaran sasaran. Ketahanan perbankan dan stabilitas sistem keuangan terjaga ditopang likuiditas yang tetap memadai, permodalan yang kuat, dan risiko kredit yang rendah. Ke depan, prospek ekonomi domestik pada 2025 diprakirakan terus membaik sebesar 4,8-5,6% dengan stabilitas moneter dan stabilitas sistem keuangan yang terjaga.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 3 Bauran Kebijakan Bank Indonesia 2023: Menjaga Stabilitas, Mendukung Pertumbuhan Berkelanjutan",
					"link": 	report_2024s_ID_bab3,
          "desc"  : "Bank Indonesia menempuh bauran kebijakan untuk menjaga stabilitas dan mendukung pertumbuhan berkelanjutan. Dalam kaitan ini, kebijakan moneter diarahkan untuk menjaga stabilitas (<i>pro-stability</i>), sedangkan 4 (empat) instrumen lainnya, yakni kebijakan makroprudensial, sistem pembayaran, pendalaman pasar uang, serta ekonomi-keuangan inklusif dan hijau diarahkan untuk mendorong pertumbuhan ekonomi (<i>pro-growth</i>). Bauran kebijakan Bank Indonesia yang turut bersinergi dengan kebijakan ekonomi nasional mampu menjaga stabilitas perekonomian dan mendorong berlanjutnya momentum pertumbuhan Indonesia di tengah perlambatan ekonomi global.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 4 Sinergi Bauran Kebijakan Ekonomi Nasional: Lima Arah Respons Kebijakan",
					"link": 	report_2024s_ID_bab4,
					"desc"  : "Lima arah sinergi bauran kebijakan nasional perlu ditempuh untuk memperkuat ketahanan dan kebangkitan perekonomian nasional. <i>Pertama</i>, penguatan koordinasi kebijakan fiskal Pemerintah dengan kebijakan moneter dan makroprudensial Bank Indonesia untuk menjaga keseimbangan antara stabilitas makroekonomi dan mendorong pertumbuhan ekonomi. <i>Kedua</i>, penguatan koordinasi KSSK untuk menjaga stabilitas sistem keuangan dan mendorong pembiayaan perekonomian. <i>Ketiga</i>, sinergi kebijakan akselerasi digitalisasi untuk mempercepat inklusi ekonomi dan keuangan. <i>Keempat</i>, sinergi kebijakan untuk perluasan hilirisasi minerba ke sektor pertanian, perkebunan, dan perikanan guna meningkatkan nilai tambah ekspor dan pengembangan industri dalam negeri. <i>Kelima</i>, kebijakan perluasan perdagangan dan investasi ke negara-negara sumber pertumbuhan ekonomi dunia ke depan.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 5 Arah Bauran Kebijakan Bank Indonesia Tahun 2024: Menjaga Stabilitas, Mendorong Pertumbuhan Berkelanjutan",
					"link": 	report_2024s_ID_bab5,
					"desc"  : "Bauran kebijakan Bank Indonesia pada 2024 akan terus diarahkan untuk menjaga stabilitas dan mendukung pertumbuhan ekonomi berkelanjutan. Kebijakan moneter Bank Indonesia difokuskan untuk menjaga stabilitas (pro-stability), sedangkan kebijakan makroprudensial, sistem pembayaran, pendalaman pasar uang, serta ekonomi- keuangan inklusif dan hijau akan terus diarahkan untuk mendorong pertumbuhan ekonomi berkelanjutan (pro-growth). Bank Indonesia juga akan terus mempererat sinergi dan koordinasi baik dengan kebijakan Pemerintah dan Komite Stabilitas Sistem Keuangan (KSSK), maupun dengan industri keuangan, dunia usaha, dan asosiasi.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 6 Keketuaan Indonesia Dalam ASEAN 2023: ASEAN <i>Matters - Epicentrum of Growth</i>",
					"link": 	report_2024s_ID_bab6,
					"desc"  : "Setelah sukses dalam Presidensi Indonesia pada G20 2022, Indonesia menerima estafet Keketuaan ASEAN dari Kamboja pada 2023 dan mengangkat tema &#8220;ASEAN <i>Matters: Epicentrum of Growth</i>&#8221;. Bank Indonesia bersinergi erat dengan Pemerintah guna mendukung keberhasilan Keketuaan Indonesia pada ASEAN 2023 tersebut. Peran strategis Bank Indonesia dalam mendukung kesuksesan Keketuaan Indonesia dilakukan melalui 5 (lima) capaian. Keketuaan Indonesia 2023 berjalan sukses dan mampu menghasilkan berbagai agenda penting untuk memperkuat ekonomi dan keuangan kawasan menghadapi ketidakpastian global dan sinergi untuk menjadi pusat pertumbuhan global.",
          "class" : 	"indent"
				},
				{
					"title": 	"Bab 7 Penguatan Kebijakan Hilirisasi Untuk Kebangkitan Ekonomi",
					"link": 	report_2024s_ID_bab7,
					"desc"  : "Kebijakan hilirisasi merupakan langkah strategis untuk memperkuat upaya meningkatkan nilai tambah dan produktivitas, tetapi juga mendukung stabilitas perekonomian. Kebijakan hilirisasi untuk mendukung stabilitas perekonomian dan meningkatkan nilai tambah dan produktivitas dapat ditempuh melalui hilirisasi pangan serta hilirisasi mineral dan batubara (minerba). Ke depan, sinergi kebijakan perlu terus diperkuat guna memperkuat hilirisasi untuk mendukung transformasi Indonesia menuju negara maju, antara lain melalui perbaikan faktor produksi, penguatan aspek pengaturan dan kelembagaan, serta penguatan kerja sama perdagangan dan promosi.",
          "class" : 	"indent"
				},
				{
					"title": 	"Lampiran",
					"link": 	report_2024s_ID_appendices,
					"desc"  : "",
					"class" : 	""
				},
				{
					"title": 	"Laporan Perekonomian Indonesia 2023",
					"link": 	report_2024s_ID_full,
					"desc"  : "",
					"class" : 	"indent"
				}
      ],
		},
    "EN" : {
			"cover" : "cover2023.jpg",
			"title": 	"Synergy Strengthening National Economic Resilience and Revival",
			"prakata" : `Let us offer praise and thanksgiving to Allah Subhanahu wa Ta'ala (SWT), God the Almighty, for by His Mercy and Grace Bank Indonesia is able to present the Economic Report on Indonesia 2023 publication for transparency of Bank Indonesia policy towards the public as mandated in article 58 paragraph (7) of Act No. 23 of 1999 concerning Bank Indonesia as amended several times, lastly by Act No. 4 of 2023 concerning Development and Strengthening of the Financial Sector.`,
			"prakataLink" : report_2024s_EN_prakata,
			"content": [
        {
					"title": 	"Overview Synergy Strengthening National Economic Resilience and Revival",
					"link": 	report_2024s_EN_overview,
          "desc"  : "The Indonesian economy charted a steady recovery with prudently managed economic stability in 2023 amid slowing growth in the global economy and heightened uncertainty in financial markets. Policy mix responses by Bank Indonesia, in synergy with national economic policies, were key to the resilient performance of the Indonesian economy. Further steps will be taken to strengthen the Bank Indonesia policy mix in 2024 to preserve stability and drive sustainable economic growth. Bank Indonesia is confident that the policy mix and close policy synergy will strengthen national economic revival and generate further momentum in moving towards an Advanced Indonesia.",
					"class" : ""
				},
				{
					"title": 	"Chapter 1 Global Economic Performance and Prospects: Moderating Growth, Heightened Uncertainty",
					"link": 	report_2024s_EN_bab1,
					"desc"  : "The rapidly changing dynamics of the world economy, accompanied by escalating geopolitical tensions, worsen the economic outlook and increase the uncertainty on global financial markets. This is characterized by five challenges, discussed below, that have generally dimmed the prospects for the world economy and increased investment; they also encourage trade divergences between developed and emerging countries and increase global financial market uncertainty. Such challenges demand the strengthening of international cooperation, both on a multilateral and regional scale, to mitigate the risks as early as possible; to minimize their spillover effects on economic resilience; and to bolster the global economic recovery.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 2 National Economic Performance and Prospects: Stability Maintained, Recovery Intact",
					"link": 	report_2024s_EN_bab2,
					"desc"  : "The synergy of prudent and consistent national economic policies can support the continued recovery of the national economy amidst global economic slowdown. Economic growth is projected to reach 4.5-5.3% in 2023 and is expected to increase into the range of 4.7-5.5% in 2024, supported by the maintenance of stability. Inflation is declining markedly and it is well-controlled within the target range. Banking resilience and financial system stability are maintained, supported by adequate liquidity, strong capitalization and low credit risk. Moving forward, the economic prospects for 2025 are projected to improve further, with growth of 4.8-5.6% with the continued maintenance of monetary and financial system stability.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 3 Bank Indonesia Policy Mix 2023: Maintaining Stability, Supporting Sustainable Growth",
					"link": 	report_2024s_EN_bab3,
					"desc"  : "The Bank Indonesia policy mix was oriented towards maintaining stability and supporting sustainable growth. In this regard, monetary policy was oriented towards maintaining stability (pro-stability), while four other policies (macroprudential policy, payment system policy, money market deepening policy and inclusive and green economy-finance policy) remained oriented towards accelerating economic growth (pro-growth). Bank Indonesia&#96;s policy mix, which also synergizes with national economic policies, is able to maintain economic stability and encourage the continuation of Indonesia&#96;s growth momentum amidst the global economic slowdown.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 4 National Economic Policy Mix Synergy: Five Directions of the Policy Response",
					"link": 	report_2024s_EN_bab4,
					"desc"  : "A synergetic policy response implemented in five directions is required to strengthen national economic resilience and revival. First, strengthening coordination between fiscal policy of the Government and monetary and macroprudential policies of Bank Indonesia to strike an optimal balance between macroeconomic stability and reviving economic growth. Second, strengthening policy coordination in the KSSK to maintain financial system stability and foster economic financing. Third, policy synergy to accelerate digitalization and increase economic and financial inclusion. Fourth, policy synergy to expand downstreaming of the mineral and mining sector to agriculture, plantation and fishing sectors to increase the value added of exports and to develop domestic industry in addition to strengthening food security and controlling inflation. Fifth, policy to expand trade and investment with trading partner countries characterised by promising growth prospects.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 5 Bank Indonesia Policy Mix Direction in 2024: Maintaining Stability, Reviving Sustainable Growth",
					"link": 	report_2024s_EN_bab5,
					"desc"  : "Bank Indonesia&#96;s policy mix in 2024 will remain oriented towards maintaining stability and reviving sustainable economic growth. Bank Indonesia&#96;s monetary policy is focused on maintaining stability (pro-stability), while macroprudential policies, payment systems, deepening money markets and inclusive and green economic finance will continue to be aimed at promoting sustainable economic growth (pro-growth). Bank Indonesia will also continue to strengthen synergy and coordination with government policies and the Financial System Stability Committee (KSSK), as well as with the financial industry, business community and associations.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 6 Indonesia&#96;s Asean Chairmanship in 2023, Asean Matters: Epicentrum of Growth",
					"link": 	report_2024s_EN_bab6,
					"desc"  : "Following the success of Indonesia&#96;s G20 Presidency in 2022, Indonesia was handed the baton of Chair of ASEAN for 2023 by Cambodia and launched the theme of ASEAN Matters: Epicentrum of Growth. Bank Indonesia worked in close synergy with the Government in supporting Indonesia&#96;s Chairmanship of ASEAN in 2023. In this, the strategic role of Bank Indonesia involved five deliverables, as discussed below. In a successful Chairmanship in 2023, Indonesia established key agendas for economic and financial strengthening of the region in the face of global uncertainties and promoted synergy for transformation into an epicentrum of global growth.",
          "class" : 	"indent"
				},
				{
					"title": 	"Chapter 7 Strengthening Downstream Policy for Economic Revival",
					"link": 	report_2024s_EN_bab7,
					"desc"  : "Downstream policy is a strategic step to increase added value and productivity while supporting economic stability. Downstream policies to support economic stability and increase added value and productivity can be pursued through the downstreaming of both food and minerals and coal. In the future, policy synergies need to be strengthened further in order to hasten downstreaming in support of Indonesia&#96;s transformation towards a developed country, including through improving factors of production, strengthening regulatory and institutional aspects, while encouraging trade cooperation and promotion.",
          "class" : 	"indent"
				},
				{
					"title": 	"Appendices",
					"link": 	report_2024s_EN_appendices,
					"desc": 	"",
					"class" : 	""
				},
				{
					"title": 	"Indonesia Economic Report 2023",
					"link": 	report_2024s_EN_full,
					"desc": 	"",
					"class" : 	"indent"
				}
      ]
		}
  }
}

var listLPI = ["2024", "2023", "2022", "2021", "2020","2019","2018","2017","2016","2015"];

var GLOBAL_MESSAGE = {
  "ID" : {
    "APP_TITLE" : "<h1>Laporan<br/>Perekonomian<br/>Indonesia</h1>",
    "SELECT_PDF_YEAR" : "Silakan pilih tahun yang diinginkan",
		"ENTER_BTN" : "Masuk",
		"SIDE_TITLE" : "Laporan Perekonomian Indonesia ",
		"PRAKATA" : "Prakata",
		"READ_MORE_BTN" : "BACA LEBIH >",
		"DEWAN_GUB" : "Dewan Gubernur",
		"MAIN_GUB_IMG" : "img/mainGub_ID.png",
		"DEWAN_GUB_IMG" : "img/dewanGub_ID.png",
		"LPI_LAIN" : "LPI lainnya",
		"SEARCH_KEYWORD" : "Cari Kata Kunci Tersimpan",
		"SEARCH_GLOBAL" : "Cari Kata Kunci",
		"SEARCH_BTN" : "CARI >",
		"EMPTY_KEYWORD" : "Kata Pencarian tidak boleh kosong",
		"BOOKMARK_DELETE" : "Bookmark telah dihapus",
		"BOOKMARK_EMPTY" : "Tidak ada bookmark",
		"BOOKMARK_ADDED" : "Bookmark telah ditambahkan",
		"NOTES_DELETE" : "Notes telah dihapus",
		"NOTES_EMPTY" : "Tidak ada notes",
		"NOTES_CANT_EMPTY" : "Notes tidak boleh kosong",
		"NOTES_ADD" : "Notes telah ditambahkan",
		"HIGHLIGHT_DELETE" : "Saved search telah dihapus",
		"HIGHLIGHT_EMPTY" : "Tidak ada Saved search",
		"SEARCH_RESULT_TITLE" :"Hasil Pencarian ",
		"QUIT_APP" : "Apakah anda ingin keluar dari aplikasi?",
		"NO_VERSION" : "Belum ada versi bahasa Indonesia."
  },
  "EN" : {
    "APP_TITLE" : "<h1>ECONOMIC<br/>REPORT<br/>ON INDONESIA</h1>",
    "SELECT_PDF_YEAR" : "Select edition",
		"ENTER_BTN" : "Enter",
		"SIDE_TITLE" : "Economic Report on Indonesia ",
		"PRAKATA" : "Foreword",
		"READ_MORE_BTN" : "READ MORE >",
		"DEWAN_GUB" : "Governor",
		"MAIN_GUB_IMG" : "img/mainGub_EN.png",
		"DEWAN_GUB_IMG" : "img/dewanGub_EN.png",
		"LPI_LAIN" : "Other Editions",
		"SEARCH_KEYWORD" : "Find Saved Keyword",
		"SEARCH_GLOBAL" : "Find Keyword",
		"SEARCH_BTN" : "SEARCH >",
		"EMPTY_KEYWORD" : "Keyword cannot be empty",
		"BOOKMARK_DELETE" : "Bookmark has been deleted",
		"BOOKMARK_EMPTY" : "No Bookmark",
		"BOOKMARK_ADDED" : "Bookmark added",
		"NOTES_DELETE" : "Notes has been deleted",
		"NOTES_EMPTY" : "No Notes",
		"NOTES_CANT_EMPTY" : "Notes can't be empty",
		"NOTES_ADD" : "Notes added",
		"HIGHLIGHT_DELETE" : "Saved search has been deleted",
		"HIGHLIGHT_EMPTY" : "There is no saved search",
		"SEARCH_RESULT_TITLE" :"Search Result",
		"QUIT_APP" : "Are you sure want to quit?",
		"NO_VERSION" : "There is no english version yet"
  }
};
