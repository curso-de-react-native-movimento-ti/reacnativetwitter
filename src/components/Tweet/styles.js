import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15, // espaçamento interno  verticalde 15px;
    paddingHorizontal: 15, // espaçamento interno  horizontal 15px;
    marginHorizontal: 16, // espaçamento externo horinzontal de 16px;
    marginVertical: 10, // espaçamento externo vertical de 10px;
    borderWidth: 1, // largura da borda de 1px;
    borderColor: "#D9D9D9", // cor da borda;
    borderRadius: 5, // borda aredondada em 5px;
    backgroundColor: "#FFFFFF" // cor de fundo;
  },
  header: {
    flexDirection: "row", // alinhamento de elemento na horizontal;
    justifyContent: "space-between", // alinhamento dos items ocupando todo o espaço;
    borderBottomWidth: 1, // borda na parte inferior do card em 1px;
    borderBottomColor: "#D9D9D9", // cor da borda inferior;
    paddingBottom: 10, // espaçamento interno na parte inferior do card.
    marginBottom: 10 // espaçamento externo na parte inferior do card.
  },
  autor: {
    fontSize: 14, // tamanho do font;
    fontWeight: "bold", // modelo de font;
    color: "#1C2022" // cor da font;
  },
  data: {
    fontSize: 12,
    color: "#D9D9D9"
  },
  conteudo: {
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    paddingBottom: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "#4E4E4E",
    textAlignVertical: "center", // alinhamento vertical do texto ao centro;
    lineHeight: 24 // altura da linha;
    // includeFontPadding: true
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30
  },
  iconsLeft: {
    flexDirection: "row"
  },
  iconsRight: {
    flexDirection: "row"
  },
  likes: {
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 24
  }
});

export default styles;
