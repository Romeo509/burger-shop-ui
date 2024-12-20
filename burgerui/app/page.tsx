import { FaThLarge } from 'react-icons/fa'; // Grid icon
import { FaSearch } from 'react-icons/fa'; // Search icon
import { FaHamburger } from 'react-icons/fa'; // Hamburger icon
import { FaHome, FaHeart, FaBell, FaStar } from 'react-icons/fa'; // Footer icons

export default function Home() {
  return (
    <div style={styles.root}>
      {/* Hollow grid item without borders */}
      <div style={styles.gridItem}>
        <FaThLarge size={24} color="rgba(255, 255, 255, 0.5)" />
      </div>

      {/* Search icon with border-radius */}
      <div style={styles.searchIconContainer}>
        <FaSearch style={styles.searchIcon} size={20} color="rgba(255, 255, 255, 0.5)" />
      </div>

      <div style={styles.mainContent}>
        <h1 style={styles.title}>Its better with a little bit of</h1>
        <p style={styles.description}>Delicious Burger</p>
      </div>

      {/* Transparent gradient navigation bar with glassmorphism effect */}
      <div style={styles.navBar}>
        <div style={styles.navTextLeft}>Burger</div>
        <div style={styles.navTextCenter}>Sandwich</div>
        <div style={styles.navTextRight}>Pasta</div>
        {/* New icon on the far right */}
        <div style={styles.navIcon}>
          <FaHamburger size={20} color="rgba(255, 255, 255, 0.8)" />
        </div>
      </div>

      {/* New opaque boxes section */}
      <div style={styles.boxesContainer}>
        <div style={styles.box1}>
          <img src="https://i.pinimg.com/736x/b5/d1/2a/b5d12aeaa73d051283303b4bba54624d.jpg" alt="Image 1" style={styles.image} />
        </div>
        <div style={styles.box2}>
          <img src="https://i.pinimg.com/736x/8d/88/ce/8d88ce9e76ad5c788c6f63575980ccef.jpg" alt="Image 2" style={styles.image} />
        </div>
        <div style={styles.box3}>
          <img src="https://i.pinimg.com/736x/9b/8c/15/9b8c1531713aedb90be605c852e3efe5.jpg" alt="Image 3" style={styles.image} />
        </div>
        <div style={styles.box4}>
          <img src="https://i.pinimg.com/736x/cb/d9/eb/cbd9ebc60754cd7b729ea4bbbf641ba7.jpg" alt="Image 4" style={styles.image} />
        </div>
      </div>

      {/* Opaque footer with colored icons */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <FaHome size={24} style={styles.icon} />
        </div>
        <div style={styles.footerIcon}>
          <FaHeart size={24} style={styles.icon} />
        </div>
        {/* Plus sign with rounded background */}
        <div style={styles.plusIconContainer}>
          <span style={styles.plusSign}>+</span>
        </div>
        <div style={styles.footerIcon}>
          <FaBell size={24} style={styles.icon} />
        </div>
        <div style={styles.footerIcon}>
          <FaStar size={24} style={styles.icon} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    margin: 0,
    padding: 0,
    height: "100vh",
    width: "100vw",
    backgroundImage: "url('https://i.pinimg.com/736x/f6/8a/02/f68a02f37343b877ebc9666bf6455450.jpg')", // Set background image
    backgroundSize: "cover", // Ensure the image covers the whole screen
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Prevent image repetition
    fontFamily: "'Arial', sans-serif",
    color: "#fff",
    position: "relative",
  },
  gridItem: {
    position: "absolute",
    top: "25px", // Spacing from the top
    left: "10px", // Spacing from the left
    backgroundColor: "transparent", // Hollow effect
    padding: "5px", // Padding around the icon inside the box
    borderRadius: "20px", // Slightly rounded corners
  },
  searchIconContainer: {
    position: "absolute",
    top: "25px", // Spacing from the top
    right: "40px", // Spacing from the right
    backgroundColor: "#333", // Background color for the search icon container
    padding: "5px", // Padding around the search icon
    borderRadius: "40%", // Making the search icon round
  },
  searchIcon: {
    cursor: "pointer",
  },
  mainContent: {
    padding: "20px",
    textAlign: "left",
    marginTop: "0px", // Spacing from the top for the title/content
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
	marginTop: "calc(20% + 0px)",
	
  },
  description: {
    fontSize: "1.2rem",
  },
  navBar: {
    position: "absolute",
    top: "calc(30% + 30px)", // Position below the text (you can adjust this based on your content)
    left: "0",
    width: "100%",
    height: "40px", // Height of the transparent bar
    background: "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))", // Gradient effect (left is more opaque)
    backdropFilter: "blur(5px)", // Glassmorphism effect
    //borderRadius: "10px", // Slightly rounded corners to match the aesthetic
    display: "flex", // Flexbox to position text elements
    justifyContent: "space-evenly", // Spread items evenly across the bar
    alignItems: "center", // Center the items vertically
    padding: "0 15px", // Add padding to both the left and right sides of the bar
  },
  navTextLeft: {
    textAlign: "center", // Center the text
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    flex: 1, // Ensure this takes up equal space
  },
  navTextCenter: {
    textAlign: "center", // Center the text
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    flex: 2, // Ensure this takes up equal space
  },
  navTextRight: {
    textAlign: "center", // Center the text
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    flex: 1, // Ensure this takes up equal space
  },
  navIcon: {
    paddingLeft: "10px", // Padding for the icon on the far right
    cursor: "pointer", // Change cursor to pointer to indicate it's clickable
    flex: 1, // Ensure the icon has equal space
  },
  boxesContainer: {
    display: "grid", // Use grid to arrange the boxes
    gridTemplateColumns: "repeat(2, 1fr)", // 2 boxes horizontally
    gap: "15px", // Space between the boxes
    marginTop: "calc(7% + 10px)", // Start after the nav bar
    marginBottom: "60px", // Space between the boxes and footer
    marginLeft: "calc(2% + 10px)", // Center horizontally
    marginRight: "auto", // Center horizontally
    width: "80%", // Make the grid container width 90% to leave some space on the sides
    padding: "10px", // Padding inside the container
    position: "relative", // Ensure proper positioning
  },
  box1: {
    borderRadius: "10px", // Rounded corners
    overflow: "hidden", // Hide overflowing parts of the image
    height: "120px", // Fixed height for square box
    width: "130px", // Fixed width for square box
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.5)",
	backdropFilter: "blur(5px)",
  },
  box2: {
    borderRadius: "10px", // Rounded corners
    overflow: "hidden", // Hide overflowing parts of the image
    height: "120px", // Fixed height for square box
    width: "130px", // Fixed width for square box
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.5)",
	backdropFilter: "blur(5px)",
  },
  box3: {
    borderRadius: "10px", // Rounded corners
    overflow: "hidden", // Hide overflowing parts of the image
    height: "120px", // Fixed height for square box
    width: "130px", // Fixed width for square box
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.5)",
	backdropFilter: "blur(5px)",
  },
  box4: {
    borderRadius: "10px", // Rounded corners
    overflow: "hidden", // Hide overflowing parts of the image
    height: "120px", // Fixed height for square box
    width: "130px", // Fixed width for square box
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
	background: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(5px)",
  },
  image: {
    width: "80%", // Ensure the image covers the box completely
    height: "80%",
    borderRadius: "10px",
	objectFit: "cover", // Ensure the image scales correctly inside the box
  },
  footer: {
    position: "absolute",
    bottom: "7%", // Position it at the bottom of the screen
    left: "0",
    width: "100%",
    height: "50px", // Height of the footer
    background: "rgba(255, 255, 255, 0.5)", // Opaque background for the footer
    backdropFilter: "blur(5px)", // Glassmorphism effect
    borderRadius: "10px", // Optional rounded corners for the footer
    display: "flex",
    justifyContent: "space-evenly", // Distribute icons evenly
    alignItems: "center",
    padding: "0 15px", // Add padding to both the left and right sides of the footer
  },
  footerIcon: {
    cursor: "pointer", // Change cursor to pointer to indicate it's clickable
  },
  icon: {
    color: "rgb(37,16,15)", // Set the icons' color to rgb(37,16,15)
  },
  plusIconContainer: {
    backgroundColor: "rgb(251,167,74)", // Background color for the plus sign
    borderRadius: "50%", // Make it round
    width: "35px", // Width of the plus sign container
    height: "35px", // Height of the plus sign container
    display: "flex",
    justifyContent: "center", // Center the plus sign horizontally
    alignItems: "center", // Center the plus sign vertically
  },
  plusSign: {
    fontSize: "24px", // Size of the plus sign
    color: "rgb(37,16,15)", // Set the plus sign color
    fontWeight: "bold", // Bold plus sign
  },
};
