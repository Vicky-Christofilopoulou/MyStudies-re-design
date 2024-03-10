import React from "react";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import './Advisers.css'


const Advisers = () => {
    return (
        <div>
            <Navbar/>

            {/*--------- Breadcrumbs -------> */}
            <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <ol>
                                <li><a href="/"><i className="icofont-home"></i></a></li>
                                <li>Φοιτητές/τριες</li>
                                <li>Θέματα Φοίτησης</li>
                                <li>Ακαδημαϊκοί Σύμβουλοι</li>
                            </ol>
                        </div>
                    </div>
                </section>
            {/*--------- Breadcrumbs -------> */}

            <div className="advisers-title">
                <h1>Ακαδημαϊκοί Σύμβουλοι</h1>
            </div>

            <div className="advisers-info">
                <p>
                    Το Τμήμα έχει υιοθετήσει και εφαρμόζει τον θεσμό του/της συμβούλου
                    καθηγητή/τριας για πάνω από δέκα χρόνια. Ο θεσμός αυτός διευκολύνει
                    τους/τις προπτυχιακούς φοιτητές/τριες να ολοκληρώσουν τις σπουδές τους με
                    τον πιο ορθολογικό και αποδοτικό τρόπο και στοχεύει στη μείωση των λιμνάζοντων
                    φοιτητών/τριών.
                </p>
                <p>
                    Όλοι οι προπτυχιακοί φοιτητές/τριες, ανεξάρτητα από έτος φοίτησης, καλούνται
                    να αξιοποιήσουν τον θεσμό του/της ακαδημαϊκού συμβούλου για να επιλύσουν
                    όποιες δυσκολίες τυχόν παρουσιαστούν, ιδιαίτερα κατά τον βασικό κύκλο των
                    σπουδών τους.
                </p>
                <p>
                Συγκεκριμένα, οι σύμβουλοι μπορούν να βοηθήσουν κάθε φοιτητή και φοιτήτρια να:
                </p>
                <ul>
                    <li>ορίσει τη βέλτιστη σειρά με την οποία θα λάβει τα μαθήματά του/της, ελαχιστοποιώντας την αποτυχία στις εξετάσεις</li>
                    <li>επιλέξει τη σωστή κατεύθυνση, την κατάλληλη ειδίκευση ή ειδικεύσεις (εάν επιθυμεί), τα απαραίτητα κατ’ επιλογή υποχρεωτικά μαθήματα και τα πιο ταιριαστά προαιρετικά μαθήματα, σύμφωνα με τα ενδιαφέροντα, τις δυνατότητες και τις επιδεξιότητες του/της</li>
                    <li>επιλύσει κατά περίπτωση κάθε μη ωφέλιμο περιορισμό στις δηλώσεις μαθημάτων, που ενδέχεται να παρουσιαστεί με την εφαρμογή των προαπαιτούμενων μαθημάτων</li>
                </ul>
                <p>
                    Για την επίλυση ιδιαίτερα σοβαρών προβλημάτων οι φοιτητές μπορούν να επισκεφθούν
                    τον Πρόεδρο του Τμήματος (με ραντεβού μέσω email).
                </p>
                <p>
                    Στον ακόλουθο πίνακα αναγράφονται τα ονόματα των ακαδημαϊκών συμβούλων με τα
                    email τους, οι αντιστοιχίες προς τους/τις φοιτητές/τριες με βάση το τελευταίο
                    ψηφίο του αριθμού μητρώου, οι ώρες υποδοχής και το γραφείο στο οποίο τους
                    δέχονται. Για τη συνάντηση με τον/την ακαδημαϊκή σύμβουλο θα πρέπει να έχει
                    κλειστεί εκ των προτέρων ραντεβού μέσω email.
                </p>
                <p>
                    <span class="advisers-asterisk">(*)</span> Λόγω της πανδημίας COVID-19, η συνάντηση συνιστάται να γίνεται διαδικτυακά και
                    πάντα μετά από συνεννόηση με τον/την ακαδημαϊκή σύμβουλο μέσω email.
                </p>
            </div>

            <div className="avdisers-table-title">
                <span>ΚΑΤΑΝΟΜΗ ΠΡΟΠΤΥΧΙΑΚΩΝ ΦΟΙΤΗΤΩΝ/ΤΡΙΩΝ ΣΤΟΥΣ ΑΚΑΔΗΜΑΪΚΟΥΣ ΣΥΜΒΟΛΟΥΣ</span>
            </div>

            <table className="advisers-table-container">
                <thead>
                <tr>
                    <th>Τελευταίο ψηφίο Αριθμού Μητρώου</th>
                    <th>Σύμβολος Καθηγητής/τρια(@di.uoa.gr)</th>
                    <th>Ώρες υποδοχής φοιτητών/τριών *</th>
                    <th>Γραφείο *</th>
                </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>0</td>
                        <td>Ρουσσοπούλου Μέμα <br/> Email: mema@</td>
                        <td>Τετάρτη  13:00-15:00</td>
                        <td>A38</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Αλωνιστιώτη Αθανασία <br/> Email: nancy@</td>
                        <td>Τετάρτη 12:00-14:00</td>
                        <td>A50</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Αρχοντία Γιαννοπούλου <br/> Email: arcgian@</td>
                        <td>Δευτέρα 11:00 - 13:00</td>
                        <td>A49</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Ρούσσου Μαρία <br/> Email: mroussou@</td>
                        <td>Τετάρτη 13:00-15:00</td>
                        <td>A51</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Χατζηκοκολάκης Κωνσταντίνος <br/> Email: kostasc@</td>
                        <td>Τετάρτη 12:00-14:00</td>
                        <td>A52</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Xατζηευθυμιάδης Ευστάθιος <br/> Email: shadj@</td>
                        <td>Τρίτη 15:00-17:00</td>
                        <td>B14</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Αλεξανδρόπουλος Γεώργιος <br/> Email: alexandg@</td>
                        <td>Τρίτη 13:00-15:00</td>
                        <td>A44</td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>Nτούλας Αλέξανδρος <br/> Email: antoulas@</td>
                        <td>Παρασκευή 15:00-17:00</td>
                        <td>A45</td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>Καρακώστας Βασίλης <br/> Email: vkarakos@</td>
                        <td>Δευτέρα 12:00-14:00</td>
                        <td>Α43</td>
                    </tr>

                    <tr>
                        <td>9</td>
                        <td>Ροντογιάννης Παναγιώτης <br/> Email: prondo@</td>
                        <td>Πέμπτη 13:00-15:00</td>
                        <td>Β8</td>
                    </tr>

                    <tr>
                        <td>Φοιτητές με Αναπηρία ή μαθησιακές δυσκολίες</td>
                        <td>Nτούλας Αλέξανδρος <br/> Email: antoulas@ <br/><br/> Αλέξανδρος Πίνο <br/> Email: pino@</td>
                        <td>Πέμπτη 15:00-17:00</td>
                        <td>B14</td>
                    </tr>
                         
                </tbody>
            </table>

            <ScrollToTop/>
            <Footer/>

        </div>
    )
}

export default Advisers