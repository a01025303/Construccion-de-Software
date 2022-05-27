using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollisionManagement : MonoBehaviour
{
     public bool collided = false;
     public ArrowController pl; 
     //
    // Start is called before the first frame update
    void Start()
    {
        pl = FindObjectOfType<ArrowController>();
        //Rigidbody2D arrowRB = GetComponent;
        Physics2D.IgnoreCollision(GetComponent<Collider2D>(), pl.player.GetComponent<Collider2D>());
    }

    // Update is called once per frame
    void Update()
    {
        //Debug.Log(collided);
    }

    void OnCollisionEnter2D(Collision2D col)
    {
        // Reset the jump only with certain objects
        if (col.gameObject.tag == "Wall" && collided == false) {
            collided = true;
            transform.SetParent(col.transform);
            GetComponent<Rigidbody2D>().bodyType = RigidbodyType2D.Static;
            //pl.shotArrowPos = pl.arrow.transform.position;
        }
        if (col.gameObject.tag == "Main Character" && collided == false) {
            collided = true;
            transform.SetParent(col.transform);
            GetComponent<Rigidbody2D>().bodyType = RigidbodyType2D.Static;
            //pl.shotArrowPos = pl.arrow.transform.position;
        }

    }
}
