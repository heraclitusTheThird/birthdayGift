import React, { useEffect, useRef, useState } from "react";
import {
  Checkbox,
  Button,
  FormControlLabel,
  Typography,
  Container,
  Box,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { Snackbar, SnackbarContent } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

type Props = {
  scroll?: boolean;
  setOpenArticlePopup?: React.Dispatch<React.SetStateAction<boolean>>;
};
const Conditions = ({ scroll, setOpenArticlePopup }: Props) => {
  const [agree, setAgree] = useState(scroll);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToRef = useRef<HTMLElement | null>(null);

  const handleOpenSnackbar = () => {
    setOpen(true);
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(event.target.checked);
  };

  function closePopup() {
    if (setOpenArticlePopup) setOpenArticlePopup(false);
  }

  useEffect(() => {
    // Scroll to the Typography element on page load
    if (scroll && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <SnackbarContent
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <ErrorIcon style={{ marginRight: "8px" }} />
              This must be a mistake, no one disagrees with terms and
              conditions.
            </span>
          }
          style={{
            backgroundColor: "#f44336",
          }}
        />
      </Snackbar>
      <Container maxWidth="xs">
        <Box
          height="400px"
          overflow="auto"
          padding="20px"
          border="1px solid #ccc"
          boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1)"
        >
          <Typography variant="h5" gutterBottom>
            Terms and Conditions
          </Typography>
          <Typography paragraph>
            By using this website, you agree to the following terms and
            conditions.
          </Typography>
          <Typography paragraph>
            1. We may use cookies and similar technologies to enhance your
            browsing experience and gather usage data. You can manage cookie
            preferences through your browser settings.
          </Typography>
          <Typography paragraph>
            2. All products and prices are subject to change without notice.
          </Typography>
          <Typography paragraph>
            3. We reserve the right to cancel or refuse any order at our
            discretion.
          </Typography>
          <Typography paragraph>
            4. Payment must be made in full before items are shipped.
          </Typography>
          <Typography paragraph>
            5. Returns and exchanges are accepted within 30 days of purchase.
          </Typography>
          <Typography paragraph>
            6. Shipping times may vary depending on location and availability.
          </Typography>
          <Typography paragraph>
            7. We are not responsible for lost or stolen packages.
          </Typography>
          <Typography paragraph>
            8. Your personal information will be used according to our privacy
            policy.
          </Typography>
          <Typography paragraph>
            9. Coupons and discounts cannot be combined.
          </Typography>
          <Typography paragraph>
            10. Any violation of these terms may result in account suspension.
          </Typography>
          <Typography paragraph>
            11. By using this website, you agree to the following terms and
            conditions related to shopping and transactions.
          </Typography>
          <Typography paragraph>
            12. Product availability is subject to change without notice. We
            strive to keep our inventory accurate, but some items may become
            unavailable.
          </Typography>
          <Typography paragraph>
            13. We reserve the right to cancel or delay orders in case of
            inventory discrepancies or unforeseen circumstances.
          </Typography>
          <Typography paragraph>
            14. Payment must be made in the currency specified during checkout.
            We accept various payment methods, including credit cards and
            digital wallets.
          </Typography>
          <Typography paragraph>
            15. Returns and exchanges are accepted within 30 days of purchase.
            Items must be in their original condition with all tags and
            packaging intact.
          </Typography>
          <Typography paragraph>
            16. Shipping times may vary based on location and availability. We
            aim to process orders promptly and provide tracking information for
            your convenience.
          </Typography>
          <Typography paragraph>
            17. We are not responsible for lost or damaged packages during
            transit. Please contact the shipping carrier for assistance in such
            cases.
          </Typography>
          <Typography paragraph>
            18. We reserve the right to cancel or refuse orders for any reason,
            including but not limited to incorrect pricing, suspicious activity,
            or violations of these terms and conditions.
          </Typography>
          <Typography paragraph>
            19. Coupons and discounts can be applied during checkout. Only one
            coupon or discount code can be used per order unless otherwise
            stated.
          </Typography>
          <Typography paragraph>
            20. Any violation of these terms may result in account suspension or
            restrictions on using our website for shopping purposes.
          </Typography>
          <Typography paragraph>
            11. By using our shopping website, you acknowledge that product
            images are for illustrative purposes only and may not always reflect
            the exact appearance of the received item due to variations in
            monitors, lighting, and manufacturing processes.
          </Typography>
          <Typography paragraph>
            12. We take security seriously. All payment transactions are
            encrypted and processed through secure payment gateways. However, we
            cannot guarantee absolute protection against unauthorized access,
            and you are responsible for keeping your account credentials
            confidential.
          </Typography>
          <Typography paragraph>
            13. In case of any product defects or discrepancies, please contact
            our customer support within 7 days of receiving your order. We may
            require photos or videos to assist in resolving the issue promptly.
          </Typography>
          <Typography paragraph>
            14. When making a purchase, you agree that you are the authorized
            user of the payment method used. Unauthorized or fraudulent
            transactions will be reported to the appropriate authorities.
          </Typography>
          <Typography paragraph>
            15. We strive to provide accurate product information, including
            specifications, sizes, and features. However, errors may
            occasionally occur. We reserve the right to correct such
            inaccuracies and update information as needed.
          </Typography>
          <Typography paragraph>
            16. Customized or personalized items may have longer processing
            times due to crafting and quality checks. These items may also be
            non-returnable or subject to restocking fees, depending on the
            circumstances.
          </Typography>
          <Typography paragraph>
            17. We may offer rewards programs, loyalty points, or referral
            bonuses. These benefits are subject to our terms and can be modified
            or discontinued at our discretion.
          </Typography>
          <Typography paragraph>
            18. Any communication, feedback, reviews, or content submitted by
            you to our website may be used for marketing purposes or displayed
            publicly. By submitting such content, you grant us a non-exclusive,
            royalty-free, perpetual license to use, reproduce, and distribute
            it.
          </Typography>
          <Typography paragraph>
            19. In the event of a product recall, we will notify affected
            customers and provide instructions for returning or disposing of the
            recalled items in a safe manner.
          </Typography>
          <Typography paragraph>
            20. These terms and conditions constitute the entire agreement
            between you and our shopping website. Any changes or modifications
            to these terms will be communicated to you through appropriate
            channels, and continued use of the website constitutes your
            acceptance of such changes.
          </Typography>
          <Typography paragraph>
            21. Our shopping website reserves the right to modify, suspend, or
            discontinue any aspect of the platform, including features,
            products, or services, at any time without prior notice.
          </Typography>
          <Typography paragraph>
            22. We are not responsible for typographical errors, inaccuracies,
            or omissions in product descriptions, prices, or availability
            information. We strive to provide accurate information, but errors
            may occur.
          </Typography>
          <Typography paragraph>
            23. The intellectual property rights, including trademarks and
            copyrights, associated with products and content displayed on our
            website are owned by their respective owners. Unauthorized use is
            prohibited.
          </Typography>
          <Typography paragraph>
            24. In the event of technical glitches, server downtime, or
            disruptions in website functionality, we will make reasonable
            efforts to resolve the issue promptly. However, we cannot guarantee
            uninterrupted access.
          </Typography>
          <Typography paragraph>
            25. You may create an account on our website to facilitate your
            shopping experience. It is your responsibility to maintain the
            confidentiality of your account credentials and restrict access to
            your account.
          </Typography>
          <Typography paragraph>
            26. We may provide links to third-party websites for your
            convenience. We are not responsible for the content, accuracy, or
            security of these external sites. Use them at your own discretion.
          </Typography>
          <Typography paragraph>
            27. Any communication, feedback, reviews, or content submitted by
            users may be used for marketing or promotional purposes. By
            submitting such content, you grant us the right to use it without
            compensation.
          </Typography>
          <Typography paragraph>
            28. Our customer support is available to assist with inquiries,
            issues, and information related to products and services. We aim to
            provide timely and helpful responses to your queries.
          </Typography>
          <Typography paragraph>
            29. In the event of disputes or claims arising from your use of our
            website, you agree to resolve such matters through arbitration in
            accordance with the laws of the jurisdiction where our company is
            registered.
          </Typography>
          <Typography paragraph>
            30. These terms and conditions are governed by and construed in
            accordance with the laws of the jurisdiction where our company is
            registered. Any legal action must be brought in the appropriate
            courts of that jurisdiction.
          </Typography>
          <Typography paragraph>
            31. If any provision of these terms is found to be invalid or
            unenforceable, the remaining provisions will remain in full force
            and effect. Our failure to enforce any right or provision does not
            constitute a waiver of that right.
          </Typography>
          <Typography paragraph>
            32. The headings in these terms are for convenience only and do not
            affect the interpretation of the clauses. References to "you,"
            "your," or similar terms refer to the users of our shopping website.
          </Typography>
          <Typography paragraph>
            33. These terms and conditions do not create any agency,
            partnership, or joint venture relationship between you and our
            shopping website. You may not assign or transfer your rights under
            these terms without our consent.
          </Typography>
          <Typography paragraph>
            34. Our shopping website reserves the right to refuse service,
            terminate accounts, or cancel orders at our discretion. We may do so
            if we suspect violations of these terms, fraudulent activity, or
            unauthorized access.
          </Typography>
          <Typography paragraph>
            35. Any notice required to be given under these terms and conditions
            may be provided through electronic means, including email, or
            prominently displayed on our website. It is your responsibility to
            stay informed of updates.
          </Typography>
          <Typography paragraph>
            36. Our shopping website may use cookies and tracking technologies
            to enhance your browsing experience and gather usage information. By
            using our website, you consent to the use of these technologies as
            described in our Privacy Policy.
          </Typography>
          <Typography paragraph>
            37. You are responsible for complying with all applicable laws,
            regulations, and restrictions when using our website. You may not
            use our website for any illegal, harmful, or unauthorized purposes.
          </Typography>
          <Typography paragraph>
            38. We reserve the right to limit the quantity of products that you
            may purchase through our website. This includes but is not limited
            to bulk orders and purchases for resale.
          </Typography>
          <Typography paragraph>
            39. Our shopping website may offer promotions, discounts, or rewards
            programs from time to time. These offers are subject to specific
            terms and conditions that will be communicated to you when you
            participate.
          </Typography>
          <Typography paragraph>
            40. Your use of our shopping website implies your acceptance of
            these terms and conditions. If you do not agree with any part of
            these terms, you should refrain from using our website for shopping
            purposes.
          </Typography>
          <Typography paragraph>
            41. Prices of products displayed on our website are subject to
            change without prior notice. We strive to provide accurate and
            up-to-date pricing information, but errors may occur.
          </Typography>
          <Typography paragraph>
            42. We may offer discounts, promotional codes, or special offers
            from time to time. These offers are subject to specific terms and
            durations that will be communicated to you when applicable.
          </Typography>
          <Typography paragraph>
            43. Product availability is not guaranteed. While we make efforts to
            maintain accurate inventory levels, there may be instances when a
            product becomes unavailable after you place an order.
          </Typography>
          <Typography paragraph>
            44. We reserve the right to cancel or refuse orders for any reason,
            including but not limited to incorrect pricing, suspicious activity,
            or violations of these terms and conditions.
          </Typography>
          <Typography paragraph>
            45. When you place an order, you will receive an order confirmation
            email containing details of your purchase. This email does not
            signify acceptance of your order; it is a confirmation of receipt.
          </Typography>
          <Typography
            paragraph
            ref={scrollToRef}
            style={{
              backgroundColor: scroll ? "yellow" : "",
              transition: scroll ? "background-color 0.5s ease" : "",
            }}
          >
            46. You understand that you are not eligible for a refund nor any
            negotiations. You recognize that any issues raised by you for a
            refund will be ignored.
          </Typography>
          <Typography paragraph>
            47. You are responsible for providing accurate and up-to-date
            shipping information during checkout. Any errors or delays due to
            incorrect information are your responsibility.
          </Typography>
          <Typography paragraph>
            48. We offer various shipping methods, each with its associated
            costs and delivery times. You can select your preferred shipping
            option during the checkout process.
          </Typography>
          <Typography paragraph>
            49. Shipping fees, customs duties, taxes, and other charges
            associated with international orders are the responsibility of the
            recipient. These fees may vary based on your location.
          </Typography>
          <Typography paragraph>
            50. In the event that you receive a damaged, defective, or incorrect
            product, please contact our customer support within [number of days]
            days of receiving the item to request a return or exchange.
          </Typography>
          <Typography paragraph>
            51. We offer a return and exchange policy for eligible products
            within a specified timeframe. Returned products must be in their
            original condition and packaging to qualify for a refund or
            exchange.
          </Typography>
          <Typography paragraph>
            52. Refunds for returned products will be processed using the
            original payment method. The timing of the refund may vary based on
            the payment provider and financial institution.
          </Typography>
          <Typography paragraph>
            53. Product warranties, if applicable, are provided by the
            manufacturer. Warranty terms and coverage vary for different
            products. Please refer to the product documentation for warranty
            details.
          </Typography>
          <Typography paragraph>
            54. We may offer customer loyalty programs or rewards programs.
            Participation in these programs is subject to specific terms and
            conditions that will be communicated to you.
          </Typography>
          <Typography paragraph>
            55. User-generated content, such as reviews and comments, may be
            displayed on our website. We reserve the right to moderate, edit, or
            remove content that violates our guidelines or policies.
          </Typography>
          <Typography paragraph>
            56. Your use of our website is subject to our Privacy Policy, which
            outlines how we collect, use, and protect your personal information.
            By using our website, you consent to the terms of the Privacy
            Policy.
          </Typography>
          <Typography paragraph>
            57. We may use cookies and similar technologies to enhance your
            browsing experience and gather usage data. You can manage cookie
            preferences through your browser settings.
          </Typography>
          <Typography paragraph>
            58. We are not responsible for any loss, damage, or harm resulting
            from your use of our website or the products purchased through it.
            Please use our services responsibly and in accordance with the law.
          </Typography>
          <Typography paragraph>
            59. Our liability for any product defects or damages is limited to
            the purchase price of the product. We are not liable for any
            indirect, incidental, or consequential damages.
          </Typography>
          <Typography paragraph>
            60. By using our website, you agree to indemnify and hold us
            harmless from any claims, losses, damages, expenses, or liabilities
            arising from your use of the website or violation of these terms.
          </Typography>
          <Typography paragraph>
            61. We reserve the right to update, modify, or change these terms
            and conditions at any time. The revised terms will be posted on our
            website, and continued use constitutes acceptance of the changes.
          </Typography>
          <Typography paragraph>
            62. If any provision of these terms is found to be unenforceable,
            the remaining provisions will remain in effect. Our failure to
            enforce any right or provision does not constitute a waiver.
          </Typography>
          <Typography paragraph>
            63. These terms and conditions do not create any agency,
            partnership, or joint venture between you and us. You may not assign
            or transfer your rights under these terms without our consent.
          </Typography>
          <Typography paragraph>
            64. These terms and conditions are governed by the laws of the
            jurisdiction where our company is registered. Any legal actions must
            be brought in the appropriate courts of that jurisdiction.
          </Typography>
          <Typography paragraph>
            65. If you have any questions, concerns, or feedback regarding these
            terms and conditions or our services, please contact our customer
            support for assistance.
          </Typography>
          <Typography paragraph>
            66. Product colors and sizes shown on our website may vary slightly
            from the actual product due to screen settings and manufacturing
            processes.
          </Typography>
          <Typography paragraph>
            67. We reserve the right to limit the quantity of products that can
            be purchased in a single order or over a specified period to prevent
            abuse or unauthorized resale.
          </Typography>
          <Typography paragraph>
            68. The use of discount codes or promotional offers may be subject
            to specific terms and conditions. These terms will be communicated
            when applicable and may include expiry dates and usage limits.
          </Typography>
          <Typography paragraph>
            69. Our customer support team is available to assist you with
            inquiries, order issues, and product information. Contact
            information can be found on our website.
          </Typography>
          <Typography paragraph>
            70. Links to third-party websites may be provided on our website. We
            are not responsible for the content, security, or privacy practices
            of these external sites.
          </Typography>
          <Typography paragraph>
            71. You may not use our website or services for any unlawful or
            prohibited purpose. This includes unauthorized access, distribution
            of harmful software, and violation of intellectual property rights.
          </Typography>
          <Typography paragraph>
            72. We reserve the right to refuse service, terminate accounts, or
            cancel orders at our discretion if we believe the customer's actions
            violate our terms, policies, or legal requirements.
          </Typography>
          <Typography paragraph>
            73. Communication with our customer support team, including emails,
            chats, and phone calls, may be recorded and monitored for quality
            assurance and training purposes.
          </Typography>
          <Typography paragraph>
            74. We respect your privacy and take data protection seriously. Our
            Privacy Policy outlines how we collect, store, and process your
            personal information. Please review the policy for details.
          </Typography>
          <Typography paragraph>
            75. You may be required to create an account to use certain features
            of our website. You are responsible for maintaining the
            confidentiality of your account information and password.
          </Typography>
          <Typography paragraph>
            76. By submitting reviews, comments, or other user-generated
            content, you grant us a non-exclusive, royalty-free, perpetual, and
            worldwide license to use, reproduce, and distribute that content.
          </Typography>
          <Typography paragraph>
            77. The design, layout, graphics, and content of our website are
            protected by copyright and other intellectual property laws.
            Unauthorized use or reproduction is prohibited.
          </Typography>
          <Typography paragraph>
            78. Any disputes arising from your use of our website or products
            will be subject to arbitration or resolution methods outlined in our
            terms and conditions and applicable laws.
          </Typography>
          <Typography paragraph>
            79. We strive to provide accurate product descriptions and images.
            However, there may be instances of typographical errors,
            inaccuracies, or omissions that we are not liable for.
          </Typography>
          <Typography paragraph>
            80. We may provide links to our social media profiles on our
            website. Please note that our presence on these platforms does not
            imply endorsement or responsibility for third-party content.
          </Typography>
          <Typography paragraph>
            81. Your use of our website and services is at your own risk. We do
            not guarantee uninterrupted, error-free, or secure access to our
            website and cannot be held responsible for technical issues.
          </Typography>
          <Typography paragraph>
            82. We may update, modify, or discontinue parts of our website or
            services without prior notice. We are not liable for any loss or
            inconvenience caused by such changes.
          </Typography>
          <Typography paragraph>
            83. These terms and conditions apply to the extent permitted by
            applicable laws. If any provision is deemed invalid or
            unenforceable, it will be replaced by a valid provision that best
            reflects the intent.
          </Typography>
          <Typography paragraph>
            84. Our business may be subject to change, including mergers,
            acquisitions, or other corporate events. In such cases, your
            information and rights will be protected according to our Privacy
            Policy.
          </Typography>
          <Typography paragraph>
            85. Thank you for reading and understanding our terms and
            conditions. Your use of our website constitutes your acceptance of
            these terms, and we appreciate your trust in our services.
          </Typography>
          <Typography paragraph>
            86. You may not use automated scripts, bots, or other means to
            access our website or gather information without our explicit
            consent.
          </Typography>
          <Typography paragraph>
            87. We reserve the right to modify or discontinue any loyalty
            programs, rewards, or referral programs offered on our website.
          </Typography>
          <Typography paragraph>
            88. Product reviews and ratings provided by customers are based on
            their personal experiences. We do not guarantee the accuracy of
            these reviews.
          </Typography>
          <Typography paragraph>
            89. You may be required to provide accurate and up-to-date billing
            and shipping information during the checkout process.
          </Typography>
          <Typography paragraph>
            90. We may offer gift cards that can be redeemed for products on our
            website. Gift cards are subject to their specific terms and
            expiration dates.
          </Typography>
          <Typography paragraph>
            91. Unauthorized use of copyrighted materials, trademarks, or
            intellectual property owned by third parties is strictly prohibited
            on our website.
          </Typography>
          <Typography paragraph>
            92. Our website may use cookies and similar technologies to enhance
            user experience and gather analytical data. Review our Cookie Policy
            for more information.
          </Typography>
          <Typography paragraph>
            93. We may send you promotional emails and newsletters if you opt
            in. You can manage your email preferences and unsubscribe at any
            time.
          </Typography>
          <Typography paragraph>
            94. You agree not to engage in activities that could disrupt the
            operation of our website or compromise its security.
          </Typography>
          <Typography paragraph>
            95. Our website may link to social media platforms. Your
            interactions on these platforms are governed by their respective
            terms and privacy policies.
          </Typography>
          <Typography paragraph>
            96. We may offer pre-order or backorder options for certain
            products. Estimated delivery dates are subject to change based on
            product availability.
          </Typography>
          <Typography paragraph>
            97. We are not responsible for delays or errors caused by
            third-party payment processors, financial institutions, or shipping
            carriers.
          </Typography>
          <Typography paragraph>
            98. You are responsible for ensuring that the products you purchase
            are suitable for your intended use and meet any legal requirements
            in your jurisdiction.
          </Typography>
          <Typography paragraph>
            99. Our website may display advertisements from third parties. We
            are not responsible for the content, accuracy, or reliability of
            these advertisements.
          </Typography>
          <Typography paragraph>
            100. These terms and conditions constitute the entire agreement
            between you and our shopping store and supersede any prior
            agreements or understandings.
          </Typography>
          <Typography paragraph>
            101. You may not frame, mirror, or reproduce our website or its
            content without our express written consent.
          </Typography>
          <Typography paragraph>
            102. We may offer customer referral programs. Referral rewards are
            subject to the terms and conditions outlined in the program details.
          </Typography>
          <Typography paragraph>
            103. We may update product prices and availability in real time. The
            price and availability shown during checkout will be the final
            values.
          </Typography>
          <Typography paragraph>
            104. You may not engage in any fraudulent, abusive, or harmful
            activities on our website or while using our services.
          </Typography>
          <Typography paragraph>
            105. Our website may feature user-generated content such as photos
            and reviews. By submitting content, you grant us the right to use
            and display it.
          </Typography>
          <Typography paragraph>
            106. We may provide links to resources, guides, and articles on our
            website. These resources are provided for informational purposes and
            do not constitute professional advice.
          </Typography>
          <Typography paragraph>
            107. In the event of a security breach or data breach, we will take
            reasonable measures to notify affected individuals and authorities
            as required by law.
          </Typography>
          <Typography paragraph>
            108. We reserve the right to limit or restrict access to our website
            if we suspect unauthorized or malicious activities.
          </Typography>
          <Typography paragraph>
            109. We may communicate with you through various channels, including
            email, phone, and notifications on our website.
          </Typography>
          <Typography paragraph>
            110. Our website may offer product bundles or sets. The availability
            and terms of these bundles are subject to change without notice.
          </Typography>
          <Typography paragraph>
            111. You may not reverse engineer, decompile, or disassemble any
            aspect of our website or its code.
          </Typography>
          <Typography paragraph>
            112. We may require age verification for the purchase of certain
            products, such as age-restricted items.
          </Typography>
          <Typography paragraph>
            113. Our website may feature live chat or messaging services for
            customer support. Conversations may be monitored for quality and
            training purposes.
          </Typography>
          <Typography paragraph>
            114. We strive to provide accurate information about product
            specifications and features. However, specifications may change, and
            we are not responsible for discrepancies.
          </Typography>
          <Typography paragraph>
            115. You may not use our website for any activities that infringe
            upon the rights of others, including intellectual property rights
            and privacy rights.
          </Typography>
          <Typography paragraph>
            116. We may offer subscription services that provide access to
            exclusive content or benefits. Subscription terms and cancellation
            policies will be provided.
          </Typography>
          <Typography paragraph>
            117. We are not responsible for delays caused by events beyond our
            control, including natural disasters, strikes, and disruptions in
            supply chains.
          </Typography>
          <Typography paragraph>
            118. You may not impersonate others or use false information when
            using our website or services.
          </Typography>
          <Typography paragraph>
            119. We may offer digital products, including downloadable files and
            software. Your use of these products is subject to any accompanying
            license agreement.
          </Typography>
          <Typography paragraph>
            120. We may offer price adjustments for products purchased shortly
            before a sale. Price adjustment eligibility and terms will be
            communicated when applicable.
          </Typography>

          {!scroll && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={agree}
                  onChange={handleCheckboxChange}
                  color="primary"
                />
              }
              label="I agree to the terms and conditions"
            />
          )}
        </Box>

        {scroll ? (
          <Box
            mt={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body1">
              Unfortunately, you have already agreed to the terms and
              conditions.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disabled={!agree}
              onClick={() => {
                closePopup();
              }}
              sx={{
                backgroundColor: "red",
                fontWeight: "900",
              }}
            >
              Ok
            </Button>{" "}
          </Box>
        ) : (
          <Box mt={2}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleOpenSnackbar}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={!agree}
                sx={{
                  backgroundColor: "red",
                  fontWeight: "900",
                }}
                onClick={() => {
                  navigate("/MainPage");
                }}
              >
                Continue
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Conditions;
