import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";

const Pdf = ({ img }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Weather Stats and User Details
        </Text>
        <Text style={styles.title1}>Weather Details | Bar Chart</Text>
        <Image style={styles.image} src={img[0]} />
        <Text style={styles.title2}>User Details</Text>
        <Image style={styles.image} src={img[1]} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

Pdf.propTypes = {
  img: PropTypes.any,
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title1: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  title2: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Oswald",
    marginTop: "30px",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 5,
    marginTop: "10px",
  },
  header: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default Pdf;
