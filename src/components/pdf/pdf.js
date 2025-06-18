import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 500,
    right: 0,
    fontSize: 10,
  },
  footer1: {
    position: "absolute",
    bottom: 30,
    left: 300,
    right: 0,
    fontSize: 10,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#eee",
    borderColor: "#000",
    padding: 5,
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
  },
  text: {
    fontSize: 10,
  },
  note: {
    marginTop: 20,
    fontSize: 12,
  },
});

const MyPDF = ({ rows, note }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image src="/OCSI Logo.png" style={{ width: 100 }} />
      </View>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Purchase Request</Text>

      {/* Table Header */}

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.text}>Item Name</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.text}>Qty</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.text}>Unit Cost</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.text}>Total</Text>
          </View>
        </View>

        {/* Table Rows */}
        {rows.map((row, idx) => (
          <View style={styles.tableRow} key={idx}>
            <View style={styles.tableCol}>
              <Text style={styles.text}>{row.inventory}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.text}>{row.orderQty}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.text}>{row.unitCost}</Text>
            </View>

            <View style={styles.tableCol}>
              <Text style={styles.text}>
                {(row.orderQty * row.unitCost).toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text> _____________ </Text>
        <Text> Jun S. Pascual </Text>
      </View>
      <View style={styles.footer1}>
        <Text> _____________ </Text>
        <Text> Lea S. Pascual </Text>
      </View>
      <Text style={styles.note}>Note: {note}</Text>
    </Page>
  </Document>
);

export default MyPDF;
